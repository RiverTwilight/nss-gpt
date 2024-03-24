import { h, Component, render, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import { FETCH_PARAMATERS, REQUEST_HEADER } from "../pages";
import siteConfig from "../../site.config";

const Result = ({ submitId, uuid }) => {
	const [recentSubmitRes, setRecentSubmitRes] = useState(null);

	useEffect(() => {
		if (submitId.length > 2) {
			getSubmitResult(submitId);
		}
	}, [submitId]);

	const getSubmitResult = (id) => {
		fetch(`${siteConfig.api_host}/get_result/`, {
			method: "POST",
			referrer: siteConfig.api_host,
			referrerPolicy: "strict-origin-when-cross-origin",
			body: JSON.stringify({
				uuid: uuid,
				submit_id: id,
			}),
			...FETCH_PARAMATERS,
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
