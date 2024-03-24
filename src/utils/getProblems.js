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

export default getProblems;
