import { InputField } from "@/components/forms/InputField";
import { IconSpinner } from "@/components/icons/IconSpinner";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { formLoginSchema } from "@/schemas/formLoginSchema";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

type LoginFormProps = {
	form: UseFormReturn<z.infer<typeof formLoginSchema>>;
	onSubmit: (data: z.infer<typeof formLoginSchema>) => void;
	isLoading: boolean;
	error?: boolean;
};

const LoginForm = (props: LoginFormProps) => {
	const { form, onSubmit, isLoading, error = false } = props;
	const { formState } = form;

	const { t } = useTranslation();

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-6">
					<div className="grid gap-2">
						<Label htmlFor="email">{t("form_login.email")}</Label>
						<InputField<z.infer<typeof formLoginSchema>>
							control={form.control}
							name="email"
							disabled={isLoading}
							autoCorrect="off"
							error={!!formState.errors.email || error}
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="password">{t("form_login.password")}</Label>
						<InputField<z.infer<typeof formLoginSchema>>
							control={form.control}
							name="password"
							type="password"
							disabled={isLoading}
							autoCorrect="off"
							error={!!formState.errors.password || error}
						/>
					</div>
					<Button disabled={isLoading} type="submit" className="w-full">
						{isLoading && <IconSpinner className="mr-2 h-4 w-4 animate-spin" />}{" "}
						{t("form_login.login")}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default LoginForm;
