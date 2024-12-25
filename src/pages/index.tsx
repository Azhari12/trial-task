import AccountForm from "@/components/auth/forms/AccountForm";
import { RootState } from "@/store/store";
import { UserType } from "@/types/UserType";
import TokenManager from "@/ultilities/TokenManager";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AccountPage = () => {
	const navigate = useNavigate();
	const user = useSelector((state: RootState) => state.user.user);
	const { t } = useTranslation();

	const form = useForm<UserType>({
		defaultValues: {
			id: "",
			name: "",
		},
	});

	const handleLogout = () => {
		TokenManager.removeToken();
		navigate("/login");
	};

	const assignValues = () => {
		form.setValue("id", user.id);
		form.setValue("name", user.name);
	};

	useEffect(() => {
		assignValues();
	}, [user]);

	return (
		<div className="w-full min-h-screen flex items-center justify-center ">
			<div className="w-[95%] h-[95%] flex flex-col items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm rounded-xl py-10">
				<h1 className="text-3xl font-bold text-white mb-5">
					{t("account.account")}
				</h1>
				<AccountForm form={form} onLogout={handleLogout} />
			</div>
		</div>
	);
};

export default AccountPage;
