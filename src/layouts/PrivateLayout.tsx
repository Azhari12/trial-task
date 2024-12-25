import { useUserSuspenseQuery } from "@/hooks/private.hook";
import { Outlet } from "react-router";

const PrivateLayout = () => {
	useUserSuspenseQuery();
	return (
		<div className="min-h-screen bg-black bg-opacity-50 backdrop-blur-sm">
			<Outlet />
		</div>
	);
};

export default PrivateLayout;
