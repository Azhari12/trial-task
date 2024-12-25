import { Outlet } from "react-router";

const GuestLayout = () => {
	return (
		<div className="min-h-screen">
			<Outlet />
		</div>
	);
};

export default GuestLayout;
