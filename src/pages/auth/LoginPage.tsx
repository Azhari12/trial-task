/* eslint-disable @typescript-eslint/no-explicit-any */
import LoginForm from "@/components/auth/forms/LoginForm";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import TokenManager from "@/ultilities/TokenManager";
import { formLoginSchema } from "@/schemas/formLoginSchema";
import { client } from "@/api/graphqlClient";
import { LoginResponseType } from "@/types/AuthTypes";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	const [error, setError] = useState<boolean>(false);

	const form = useForm<z.infer<typeof formLoginSchema>>({
		resolver: zodResolver(formLoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (data: z.infer<typeof formLoginSchema>) => {
		const query = `mutation {
			login(email: "${data.email}", password: "${data.password}") {
				access_token
				refresh_token
			}
		}`;
		mutationLogin.mutateAsync(query);
	};

	const mutationLogin = useMutation({
		mutationKey: [`login`],
		async mutationFn(query: any) {
			try {
				const apiResponse = (await client.request(query)) as LoginResponseType;
				console.log(apiResponse);
				TokenManager.saveToken(apiResponse.login.access_token);
				toast.success(t("success.login"));
				setError(false);
				navigate("/");
			} catch (err: any) {
				const { errors } = err.response;
				if (errors[0].message === "Unauthorized") setError(true);
				toast.error(
					(errors[0].message ? errors[0].message + ", " : "") + t("error.login")
				);
			}
		},
	});

	return (
		<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm ">
				<div className="flex flex-col gap-6">
					<Card className="backdrop-blur-md bg-opacity-50 ">
						<CardHeader>
							<CardTitle data-testid="login" className="text-2xl">
								{t("form_login.login")}
							</CardTitle>
							<CardDescription className="font-medium">
								{t("login_info")}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<LoginForm
								form={form}
								onSubmit={onSubmit}
								isLoading={mutationLogin.isPending}
								error={error}
							/>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
