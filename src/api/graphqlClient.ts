import { BASE_API_URL } from "@/constants/CommonConstant";
import TokenManager from "@/ultilities/TokenManager";
import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(BASE_API_URL, {
	headers: {
		Authorization: `Bearer ${TokenManager.getToken()}`,
	},
});
