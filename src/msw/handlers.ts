import { graphql, HttpResponse } from "msw";

export const handlers = [
	graphql.mutation("login", ({ variables }) => {
		const { email, password } = variables;

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
