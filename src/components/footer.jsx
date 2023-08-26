import { h, Component, render, Fragment } from "preact";

const Footer = () => {
	return (
		<div className="py-4 text-slate-500 text-center font-mono">
			<a
				href="https://github.com/rivertwilght"
				className="cursor-pointer"
			>
				Designed By @RiverTwilight
			</a>{" "}
			·{" "}
			<a href="https://ctfer.vip" className="underline cursor-pointer">
				NSSCTF
			</a>
		</div>
	);
};

export default Footer;
