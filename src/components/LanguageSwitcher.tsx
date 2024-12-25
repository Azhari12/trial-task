import { supportedLngs } from "@/i18n/config";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	return (
		<div className="fixed bottom-0 right-0 p-7">
			<Select
				defaultValue={"en"}
				value={i18n.resolvedLanguage}
				onValueChange={(e) => i18n.changeLanguage(e)}
			>
				<SelectTrigger className="w-[180px]">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{Object.entries(supportedLngs).map(([code, name]) => (
							<SelectItem key={code} value={code}>
								{name}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export default LanguageSwitcher;
