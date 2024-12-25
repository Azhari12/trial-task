import { IconSpinner } from "./icons/IconSpinner";

const ScreenLoader = () => {
	return (
		<div className="w-full min-h-screen flex justify-center items-center bg-black bg-opacity-90 backdrop-blur-sm">
			<IconSpinner color="white" className=" mr-2 h-10 w-10 animate-spin" />
		</div>
	);
};

export default ScreenLoader;
