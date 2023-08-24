import { h, Component, render, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";

const Result = ({ submitId, uuid }) => {
	const [recentSubmitRes, setRecentSubmitRes] = useState(null);

	useEffect(() => {
		if (submitId.length > 2) {
			getSubmitResult(submitId);
		}
	}, [submitId]);

	const getSubmitResult = (id) => {
		fetch("https://prompt.wd-ljt.com/get_result/", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
			},
			referrer: "https://prompt.wd-ljt.com/",
			referrerPolicy: "strict-origin-when-cross-origin",
			body: JSON.stringify({
				uuid: uuid,
				submit_id: id,
			}),
			mode: "cors",
			credentials: "include",
		})
			.then((response) => response.json())
			.then((data) => {
				setRecentSubmitRes({
					score: data.message.score,
					result: data.message.result,
				});
			});
	};

	if (!!!recentSubmitRes) {
		return null;
	}

	return (
		<div className="mt-4 gap-1 py-4 px-6 w-full bg-white rounded-xl shadow-lg flex items-center">
			{recentSubmitRes.score}
		</div>
	);
};

export default Result;
