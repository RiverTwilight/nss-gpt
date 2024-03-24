import { h, Component, render, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";

const Snackbar = ({ message }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			const element = document.getElementById("snackbar-root");
			if (element) {
				render(null, element);
			}
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="fixed flex justify-center top-4 right-0 left-0 z-50">
			<div className="bg-red-500 text-white px-4 py-2 rounded shadow-lg">
				{message}
			</div>
		</div>
	);
};

export const showSnackbar = (message) => {
	const snackbarRoot = document.createElement("div");
	snackbarRoot.id = "snackbar-root";
	document.body.appendChild(snackbarRoot);

	render(<Snackbar message={message} />, snackbarRoot);
};

export default Snackbar;
