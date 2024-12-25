import ScreenLoader from "@/components/ScreenLoader";
import GuestLayout from "@/layouts/GuestLayout";
import PrivateLayout from "@/layouts/PrivateLayout";
import TokenManager from "@/ultilities/TokenManager";
import { Suspense } from "react";
import { Navigate } from "react-router";

export const GuestRoute = () => {
	if (!TokenManager.getToken()) localStorage.removeItem("user");
	return !TokenManager.getToken() ? <GuestLayout /> : <Navigate to={"/"} />;
};

export const PrivateRoute = () => {
	if (!TokenManager.getToken()) localStorage.removeItem("user");
	return TokenManager.getToken() ? (
		<Suspense fallback={<ScreenLoader />}>
			<PrivateLayout />
		</Suspense>
	) : (
		<Navigate to={"/login"} />
	);
};
