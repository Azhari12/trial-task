/* eslint-disable @typescript-eslint/no-explicit-any */
import LoginPage from "@/pages/auth/LoginPage";
import {
	afterAll,
	afterEach,
	beforeAll,
	describe,
	expect,
	test,
	vi,
} from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";
import { serviceWorker } from "@/msw/worker";
import AccountPage from "@/pages";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const queryClient = new QueryClient();

afterEach(() => {
	cleanup();
});

beforeAll(() => {
	serviceWorker.listen();
});

afterAll(() => {
	serviceWorker.close();
});

afterEach(() => {
	serviceWorker.resetHandlers();
});

describe("Login", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});
	test("should render the login page", () => {
		render(
			<MemoryRouter>
				<QueryClientProvider client={queryClient}>
					<LoginPage />
				</QueryClientProvider>
			</MemoryRouter>
		);
		expect(screen.getByLabelText("Email")).toBeDefined();
		expect(screen.getByTestId("email")).toBeDefined();
		expect(screen.getByLabelText("Password")).toBeDefined();
		expect(screen.getByTestId("password")).toBeDefined();
		expect(screen.getByRole("button", { name: /Login/i })).toBeDefined();
	});

	test("should submit the form successfully ", async () => {
		render(
			<MemoryRouter>
				<QueryClientProvider client={queryClient}>
					<LoginPage />
				</QueryClientProvider>
			</MemoryRouter>
		);

		userEvent.type(screen.getByTestId("email"), "john@mail.com");
		userEvent.type(screen.getByTestId("password"), "changeme");

		userEvent.click(screen.getByRole("button", { name: /Login/i }));
	});

	test("should render the Account Page", () => {
		render(
			<MemoryRouter>
				<QueryClientProvider client={queryClient}>
					<Provider store={store}>
						<AccountPage />
					</Provider>
				</QueryClientProvider>
			</MemoryRouter>
		);
		expect(screen.getByLabelText("Name")).toBeDefined();
		expect(screen.getByTestId("name")).toBeDefined();
		expect(screen.getByLabelText("Id")).toBeDefined();
		expect(screen.getByTestId("id")).toBeDefined();
		expect(screen.getByRole("button", { name: /Logout/i })).toBeDefined();
	});

	test("should logout and navigate to login", async () => {
		render(
			<MemoryRouter initialEntries={["/account"]}>
				<QueryClientProvider client={queryClient}>
					<Provider store={store}>
						<Routes>
							<Route path="/account" element={<AccountPage />} />
							<Route path="/login" element={<LoginPage />} />
						</Routes>
					</Provider>
				</QueryClientProvider>
			</MemoryRouter>
		);

		expect(screen.getByLabelText("Name")).toBeDefined();
		expect(screen.getByTestId("name")).toBeDefined();
		expect(screen.getByLabelText("Id")).toBeDefined();
		expect(screen.getByTestId("id")).toBeDefined();
		expect(screen.getByRole("button", { name: /Logout/i })).toBeDefined();

		userEvent.click(screen.getByRole("button", { name: /Logout/i }));

		await waitFor(() => screen.getByLabelText("Email"));
		expect(screen.getByLabelText("Email")).toBeDefined();
	});
});
