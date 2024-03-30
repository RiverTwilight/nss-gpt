import { h, Component, render, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import apiClient from "../utils/apiClient";

const MAX_RETRY_COUNT = 5;

const Result = ({ submitId, uuid, setIsLoading }) => {
	const [recentSubmitRes, setRecentSubmitRes] = useState(null);
	const [retryCount, setRetryCount] = useState(0);

	useEffect(() => {
		const fetchResult = () => {
			if (uuid && submitId) {
				setIsLoading(true);
				apiClient.getSubmissonResult(
					{ uuid, id: submitId },
					(data) => {
						setIsLoading(false);

						setRecentSubmitRes({
							score: data.message.score,
							result: data.message.result,
						});
						localStorage.removeItem("recentSubmitId");
					},
					(error) => {
						// Handle error and retry logic
						if (retryCount < MAX_RETRY_COUNT) {
							console.log("Start Retrying...");
							const delay = retryCount === 0 ? 6000 : 5000;
							setTimeout(fetchResult, delay);
							setRetryCount(retryCount + 1);
						} else {
							console.error(
								"Failed to fetch result after retries",
								error
							);
							// Handle error notification or fallback UI
						}
					}
				);
			}
		};
		fetchResult();
	}, [uuid, submitId]);

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
