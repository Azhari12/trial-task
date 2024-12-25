import { z } from "zod";

export const formLoginSchema = z.object({
	email: z.string().min(1, "email cannot be empty").email({
		message: "email must be a valid email example@domain.com",
	}),
	password: z.string().min(1, "password cannot be empty"),
});
