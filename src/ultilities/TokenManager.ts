import { Cookies } from "react-cookie";
import { USER_AUTH_TOKEN } from "../constants/CommonConstant";

class TokenManager {
	private token: string | null;
	private cookies = new Cookies();

	constructor() {
		this.token = this.cookies.get(USER_AUTH_TOKEN);
	}

	public saveToken(token: string) {
		this.cookies.set(USER_AUTH_TOKEN, token, {
			path: "/",
			maxAge: 43200,
		});
		this.token = token;
	}

	public getToken() {
		return this.token ?? this.cookies.get(USER_AUTH_TOKEN);
	}

	public removeToken() {
		this.cookies.remove(USER_AUTH_TOKEN);
		this.token = null;
	}
}

export default new TokenManager();
