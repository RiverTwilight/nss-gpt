import { h, Component, render, Fragment } from "preact";

const Footer = () => {
	return (
		<div className="py-4 text-slate-500 text-center font-mono">
			<a className="cursor-pointer">By @RiverTwilight</a> ·{" "}
			<a className="underline cursor-pointer">NSSCTF</a>
		</div>
	);
};

export default Footer;
