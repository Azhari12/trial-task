/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/api/graphqlClient";
import { userQuery } from "@/api/graphqlQueries";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { setUser } from "@/store/slices/user-slice";
import { useTranslation } from "react-i18next";

export const useUserSuspenseQuery = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { t } = useTranslation();
	const query = useSuspenseQuery({
		queryKey: ["users/1"] as const,
		async queryFn() {
			try {
				const data = (await client.request(userQuery)) as any;
				return data;
			} catch (error: any) {
				console.error(error);
				return null;
			}
		},
		refetchOnWindowFocus: false,
	});

	useEffect(
		() => {
			console.log(query.data);

			if (query.data) {
				dispatch(setUser(query.data.user));
			} else {
				toast.error(t("error.data"));
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[query.data]
	);
};
