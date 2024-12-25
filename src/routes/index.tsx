import { createBrowserRouter } from "react-router";
import AccountPage from "@/pages";
import ErrorBoundary from "@/components/ErrorBoundary";
import { GuestRoute, PrivateRoute } from "./midleware";
import LoginPage from "@/pages/auth/LoginPage";

export const router = createBrowserRouter([
	{
		element: (
			<ErrorBoundary>
				<GuestRoute />
			</ErrorBoundary>
		),
		children: [
			{
				path: "/login",
				element: <LoginPage />,
			},
		],
	},
	{
		path: "/",
		element: (
			<ErrorBoundary>
				<PrivateRoute />
			</ErrorBoundary>
		),
		children: [
			{
				index: true,
				element: <AccountPage />,
			},
		],
	},
]);
