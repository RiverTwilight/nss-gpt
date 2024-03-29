import { h, Component, render, Fragment } from "preact";

const Hero = () => {
	return (
		<>
			<h1 className="font font-mono font-bold text-4xl">
				NSSCTF
				<br />
				2024 Spring Recruit
				<span className="blinking-underscore">_</span>
			</h1>

			<div className="py-6 text-slate-600">
				<p> 🎉 &nbsp; Welcome to NSSCTF challenge!</p>
				<p>🔑 &nbsp; Hypnotized GPT, and got the KEY.</p>
				<p> 🚀 &nbsp; Start your show.</p>
			</div>
		</>
	);
};

export default Hero;
