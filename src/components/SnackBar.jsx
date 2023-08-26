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
		<div className="fixed top-4 right-4 bg-red-500 text-white p-2 rounded shadow-lg z-50">
			{message}
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
