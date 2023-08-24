import { h, Component, render, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import ProgressBar from "../components/progress";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Result from "../components/result";

const App = () => {
	const [activeTab, setActiveTab] = useState("Submit");
	const [selectedProblem, setSelectedProblem] = useState("");
	const [problems, setProblems] = useState([]);
	const [prompt, setPrompt] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [score, setScore] = useState(0);
	const [nssKey, setNssKey] = useState("");
	const [nssSecret, setNssSecret] = useState("");
	// const [nssKey, setNssKey] = useState("7e4dd3f47adecd02f75c");
	// const [nssSecret, setNssSecret] = useState(
	// 	"c396a00f30620c092a9c626d0d9287995aaaba02"
	// );
	const [history, setHistory] = useState([]);
	const [uuid, setUuid] = useState(null);
	const [recentSubmitId, setRecentSubmitId] = useState("");

	useEffect(() => {
		setUuid(localStorage.getItem("uuid") || "");
	}, []);

	useEffect(() => {
		if (!!uuid) {
			getProblems(uuid);
			setInterval(() => {
				let currentId = uuid;
				getScore(currentId);
			}, 10000);
		}
	}, [uuid]);

	const handlePromptSubmit = (id) => {
		if (!!!selectedProblem) return;

		setIsLoading(true);
		fetch("https://prompt.wd-ljt.com/submit/", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
			},
			referrer: "https://prompt.wd-ljt.com/",
			referrerPolicy: "strict-origin-when-cross-origin",
			body: JSON.stringify({
				challenge_name: selectedProblem,
				prompt: prompt,
				uuid: id,
			}),
			mode: "cors",
			credentials: "include",
		})
			.then((response) => response.json())
			.then((data) => {
				setRecentSubmitId(data.message.submit_id);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const handleGenerateUUID = () => {
		setIsLoading(true);

		fetch("https://prompt.wd-ljt.com/get_user_id/", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
			},
			referrer: "https://prompt.wd-ljt.com/",
			referrerPolicy: "strict-origin-when-cross-origin",
			body: JSON.stringify({ nss_key: nssKey, nss_secret: nssSecret }),
			mode: "cors",
			credentials: "include",
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.code === 200 || data.code === 204) {
					setUuid(data.message.uuid);
					setActiveTab("Submit");
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const handleGetHistory = () => {
		fetch("https://prompt.wd-ljt.com/get_history/", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
			},
			referrer: "https://prompt.wd-ljt.com/",
			referrerPolicy: "strict-origin-when-cross-origin",
			body: JSON.stringify({ uuid }),
			mode: "cors",
			credentials: "include",
		})
			.then((response) => response.json())
			.then((data) => {
				setHistory(data.message.history);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const getScore = (id) => {
		fetch("https://prompt.wd-ljt.com/settle/", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
			},
			referrer: "https://prompt.wd-ljt.com/",
			referrerPolicy: "strict-origin-when-cross-origin",
			body: JSON.stringify({ uuid: id }),
			mode: "cors",
			credentials: "include",
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.code === 200) {
					setScore(data.message.score);
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const getProblems = (id) => {
		fetch("https://prompt.wd-ljt.com/challenge/", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
			},
			referrer: "https://prompt.wd-ljt.com/",
			referrerPolicy: "strict-origin-when-cross-origin",
			body: JSON.stringify({ uuid: id }),
			mode: "cors",
			credentials: "include",
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.code == 200) {
					let problemList = [];

					data.message.solved.forEach((solved) => {
						problemList.push({
							solved: true,
							type: solved.challenge_type,
							name: solved.challenge_name,
							prompt: solved.challenge_prompt,
							best_score: solved.best_score,
						});
					});

					data.message.unsolved.forEach((unsolved) => {
						if (
							!problemList.some(
								(pro) => pro.name === unsolved.challenge_name
							)
						) {
							problemList.push({
								solved: false,
								type: unsolved.challenge_type,
								name: unsolved.challenge_name,
								prompt: unsolved.challenge_prompt,
								best_score: unsolved.best_score,
							});
						}
					});

					setProblems(problemList);
					setSelectedProblem(data.message.unsolved.challenge_name);
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && e.shiftKey) {
			handlePromptSubmit();
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		// Cleanup function to remove the listener when the component unmounts
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<div className="flex flex-col">
			<main className="flex-grow w-[764px] mt-[20vh]">
				<Hero />
				<ProgressBar progress={score} total={43200} />

				<div className="mt-4 w-full bg-white rounded-xl shadow-lg">
					<div className="w-full flex mb-4">
						{[
							{ value: "Submit", label: "Submit" },
							{ value: "ID", label: "Register" },
							{ value: "History", label: "History" },
						].map((tab) => (
							<div className="relative w-full">
								<button
									key={tab}
									onClick={() => setActiveTab(tab.value)}
									className={`w-full text-slate-500 px-4 py-3 ${
										activeTab === tab
											? "text-slate-950"
											: ""
									}`}
								>
									{tab.label}
								</button>
								{activeTab === tab.value && (
									<div className="flex justify-center absolute bottom-0 right-0 left-0">
										<span className="h-[4px] w-6 bg-blue-500"></span>
									</div>
								)}
							</div>
						))}
					</div>
					<section className="py-4">
						{activeTab === "Submit" && (
							<div
								className={`transition-all flex max-h-[600px]`}
							>
								<div className="w-[200px] overflow-auto">
									<ul>
										{problems.map((problem) => {
											return (
												<li
													key={problem.name}
													onClick={() => {
														setSelectedProblem(
															problem.name
														);
													}}
													className="py-2 px-3 cursor-pointer flex justify-between hover:bg-slate-100"
												>
													<span
														className={`${
															selectedProblem ===
																problem.name &&
															"font-semibold text-blue-600"
														}`}
													>
														{problem.name}
													</span>
													{problem.solved && (
														<div className="">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																height="24"
																className="fill-green-400"
																viewBox="0 -960 960 960"
																width="24"
															>
																<path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
															</svg>
														</div>
													)}
												</li>
											);
										})}
									</ul>
								</div>
								<div className="w-full px-4 py-2 flex flex-col">
									<div className=" bg-slate-200 flex px-2 fill-slate-400 justify-between  p-2 rounded">
										<div className="flex gap-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height="24"
												viewBox="0 -960 960 960"
												width="24"
											>
												<path d="M140-80q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h250v-140q0-24 18-42t42.411-18h59.178Q534-880 552-862t18 42v140h250q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680v-480H570v30q0 28-18 44t-42.411 16h-59.178Q426-530 408-546t-18-44v-30H140v480Zm92-107h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-312q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q22.5 0 38.25-15.75T408-418q0-22.5-15.75-38.25T354-472q-22.5 0-38.25 15.75T300-418q0 22.5 15.75 38.25T354-364Zm214-63h170v-50H568v50ZM450-590h60v-230h-60v230Zm30 210Z" />
											</svg>
											<div className="text-slate-400">
												{uuid}
											</div>
										</div>
										<div
											onClick={() => setActiveTab("ID")}
											className="text-blue-500 cursor-pointer"
										>
											Change
										</div>
									</div>
									{/* <div className="flex mt-2 p-1 bg-slate-200 rounded">
										<button
											onClick={() =>
												setActiveMode("Unicode")
											}
											className={`rounded w-full border-blue-200 px-3 py-1 ${
												activeMode === "Unicode" &&
												"bg-blue-700 text-white"
											}`}
										>
											Unicode
										</button>
										<button
											onClick={() =>
												setActiveMode("ASCII")
											}
											className={`rounded w-full border-blue-200 px-3 py-1 ${
												activeMode === "ASCII" &&
												"bg-blue-700 text-white"
											}`}
										>
											ASCII
										</button>
									</div> */}
									<textarea
										type="text"
										value={prompt}
										onChange={(e) =>
											setPrompt(e.target.value)
										}
										className="border p-2 mt-2 w-full min-h-[4em] flex-grow"
										placeholder="Prompt"
									/>
									<div className="flex flex-row-reverse justify-between mt-4">
										<div className="gap-2 flex flex-row-reverse">
											<button
												onClick={() =>
													handlePromptSubmit(uuid)
												}
												className={`px-4 uppercase font-semibold rounded py-2 ${
													isLoading ||
													!!!selectedProblem
														? "bg-gray-400"
														: "bg-blue-600"
												} text-white`}
											>
												Submit
											</button>
											<span className="font-mono text-slate-400 self-center">
												Shift + Enter
											</span>
										</div>
										<div className="text-blue-600">
											{selectedProblem}
										</div>
									</div>
								</div>
							</div>
						)}

						{activeTab === "ID" && (
							<div className={`transition-all px-4 py-2`}>
								<input
									type="text"
									value={nssKey}
									onChange={(e) => setNssKey(e.target.value)}
									className="border p-2 w-full mb-2"
									placeholder="NSS Key"
								/>
								<input
									type="text"
									value={nssSecret}
									onChange={(e) =>
										setNssSecret(e.target.value)
									}
									className="border p-2 w-full"
									placeholder="NSS Secret"
								/>
								<div className="flex flex-row-reverse justify-between gap-2 mt-4">
									<button
										disabled={isLoading}
										onClick={handleGenerateUUID}
										className={`px-4 uppercase font-semibold rounded py-2 ${
											isLoading
												? "bg-gray-400"
												: "bg-blue-600"
										} text-white`}
									>
										Generate UUID
									</button>

									<div className="tooltip-wrapper text-slate-400 self-center cursor-pointer hover:text-slate-700 transition-all">
										<span className="tooltip-text">
											You can get the apply for key and
											secret at
											https://www.nssctf.cn/user/range/api
										</span>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height="24"
												viewBox="0 -960 960 960"
												width="24"
												className="fill-slate-500"
											>
												<path d="M484-247q16 0 27-11t11-27q0-16-11-27t-27-11q-16 0-27 11t-11 27q0 16 11 27t27 11Zm-35-146h59q0-26 6.5-47.5T555-490q31-26 44-51t13-55q0-53-34.5-85T486-713q-49 0-86.5 24.5T345-621l53 20q11-28 33-43.5t52-15.5q34 0 55 18.5t21 47.5q0 22-13 41.5T508-512q-30 26-44.5 51.5T449-393Zm31 313q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
											</svg>
										</span>
									</div>
								</div>
							</div>
						)}

						{activeTab === "History" && (
							<div className="p-2">
								{history.length < 1 ? (
									<div className="h-[40px] leading-[40px] text-slate-500 text-center ">
										<div>No history yet</div>
									</div>
								) : (
									<ul>
										<li className="px-2 flex py-2">
											<span className="w-full">Date</span>
											<span className="w-full">Type</span>
											<span className="w-full">
												Score
											</span>
										</li>
										{history.map((item, index) => (
											<li
												key={index}
												className="flex py-3 px-2 border-t-2 border-slate-200 hover:bg-slate-100"
											>
												<span className="w-full">
													{item.submit_date}
												</span>

												<span className="w-full text-green-700 text-sm">
													{item.challenge_name}
												</span>

												<span className="w-full">
													14
												</span>
											</li>
										))}
									</ul>
								)}
								<div className="text-center">
									<button
										onClick={handleGetHistory}
										className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
									>
										Refresh History
									</button>
								</div>
							</div>
						)}
					</section>
				</div>
			</main>
			<Result uuid={uuid} submitId={recentSubmitId} />
			<Footer />
		</div>
	);
};

// Render the App into the DOM
render(<App />, document.body);
