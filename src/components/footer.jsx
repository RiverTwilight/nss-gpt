import { h, Component, render, Fragment } from "preact";

const Footer = () => {
	return (
		<div className="py-4 text-slate-500 text-center font-mono">
			<a
				href="https://github.com/rivertwilight"
				className="cursor-pointer px-1"
			>
				Designed By @RiverTwilight
			</a>
			·
			<a
				href="https://github.com/rivertwilight/nss-gpt"
				className="underline cursor-pointer px-1"
			>
				GitHub
			</a>
			·
			<a
				href="https://nssctf.cn"
				className="underline cursor-pointer px-2"
			>
				NSSCTF
			</a>
		</div>
	);
};

export default Footer;
