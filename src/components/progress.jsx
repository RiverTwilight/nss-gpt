import { h, Component, render, Fragment } from "preact";

const ProgressBar = ({ progress, total }) => {
	const progressPercent = (progress / total) * 100;

	return (
		<div className="mt-6 gap-1 py-4 px-6 w-full bg-white rounded-xl shadow-lg flex items-center">
			<span className="mx-2 text-slate-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 -960 960 960"
					width="24"
				>
					<path d="M298-120v-60h152v-148q-54-11-96-46.5T296-463q-74-8-125-60t-51-125v-44q0-25 17.5-42.5T180-752h104v-88h392v88h104q25 0 42.5 17.5T840-692v44q0 73-51 125t-125 60q-16 53-58 88.5T510-328v148h152v60H298Zm-14-406v-166H180v44q0 45 29.5 78.5T284-526Zm196 141q57 0 96.5-40t39.5-97v-258H344v258q0 57 39.5 97t96.5 40Zm196-141q45-10 74.5-43.5T780-648v-44H676v166Zm-196-57Z" />
				</svg>
			</span>
			<div className="h-[1.5em] w-full relative overflow-hidden">
				<div className="text-white absolute inset-0 flex items-center justify-center">
					<span>
						{progress}/{total}
					</span>
				</div>
				<div className="h-full bg-gray-200 rounded-xl">
					{progressPercent > 5 && (
						<div
							className="h-full bg-blue-500 rounded-xl"
							style={{ width: `${(progress / total) * 100}%` }}
						></div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProgressBar;
