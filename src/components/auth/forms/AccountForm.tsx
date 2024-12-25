import { InputField } from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { UserType } from "@/types/UserType";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";

type AccountFormProps = {
	form: UseFormReturn<UserType>;
	onLogout: () => void;
};

const AccountForm = ({ form, onLogout }: AccountFormProps) => {
	const { t } = useTranslation();

	return (
		<Form {...form}>
			<div className="flex flex-col gap-6 w-3/4 md:w-1/2 lg:w-1/3">
				<div className="grid gap-2">
					<Label htmlFor="id" className="text-white">
						{t("account.id")}
					</Label>
					<InputField<UserType>
						control={form.control}
						name="id"
						autoCorrect="off"
						disabled
					/>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="name" className="text-white">
						{t("account.name")}
					</Label>
					<InputField<UserType>
						control={form.control}
						name="name"
						autoCorrect="off"
						disabled
					/>
				</div>

				<Button className="w-full mt-5" onClick={onLogout}>
					{t("account.logout")}
				</Button>
			</div>
		</Form>
	);
};

export default AccountForm;
