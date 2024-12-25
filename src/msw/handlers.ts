import { graphql, HttpResponse } from "msw";

// Mock API untuk GraphQL Login
export const handlers = [
	graphql.mutation("login", ({ variables }) => {
		const { email, password } = variables; // Destructuring variables from request

		if (email === "john@mail.com" && password === "changeme") {
			return HttpResponse.json({
				data: {
					login: {
						access_token: "mockAccessToken",
						refresh_token: "mockRefreshToken",
					},
				},
			});
		}
	}),
];
