import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const supportedLngs = {
	en: "English",
	id: "Indonesian (Bahasa Indonesia)",
	de: "German (Deutsch)",
	ja: "Japanese",
};

i18n.use(initReactI18next).init({
	lng: "en",
	fallbackLng: "en",
	debug: true,
	interpolation: {
		escapeValue: false,
	},
	resources: {
		// English
		en: {
			translation: {
				login_info: "Enter your email and password below to login to your account",
				form_login: {
					email: "Email",
					password: "Password",
					login: "Login",
				},
				account: {
					account: "Account",
					id: "Account ID",
					name: "Account Name",
					logout: "Logout",
				},
				error: {
					data: "Failed to load data, please try to log in again in a few moments",
					login:
						"Login failed, please try again and check your email and password again",
				},
				success: {
					login: "Login success",
				},
			},
		},
		// Indonesian
		id: {
			translation: {
				login_info:
					"Masukkan email dan kata sandi Anda di bawah ini untuk masuk ke akun Anda",
				form_login: {
					email: "Email",
					password: "Kata Sandi",
					login: "Login",
				},
				account: {
					account: "Akun",
					id: "ID Akun",
					name: "Nama Akun",
					logout: "Logout",
				},
				error: {
					data: "Gagal memuat data, silakan coba login kembali dalam beberapa saat",
					login:
						"Login gagal, silakan coba lagi dan periksa email dan kata sandi Anda kembali",
				},
				success: {
					login: "Login berhasil",
				},
			},
		},
		// German
		de: {
			translation: {
				login_info:
					"Geben Sie unten Ihre E-Mail und Ihr Passwort ein, um sich bei Ihrem Konto anzumelden",
				form_login: {
					email: "Email",
					password: "Passwort",
					login: "Anmeldung",
				},
				account: {
					account: "Konto",
					id: "Konto-ID",
					name: "Kontoname",
					logout: "Ausloggen",
				},
				error: {
					data:
						"Fehler beim Laden der Daten, versuchen Sie es in wenigen Minuten erneut",
					login:
						"Anmeldung fehlgeschlagen, bitte versuchen Sie es erneut und überprüfen Sie Ihre E-Mail und Ihr Passwort erneut",
				},
				success: {
					login: "Anmeldung erfolgreich",
				},
			},
		},
		// Japanese
		ja: {
			translation: {
				login_info:
					"アカウントにログインするには、以下にメールアドレスとパスワードを入力してください",
				form_login: {
					email: "メールアドレス",
					password: "パスワード",
					login: "ログイン",
				},
				account: {
					account: "アカウント",
					id: "アカウントID",
					name: "アカウント名",
					logout: "ログアウト",
				},
				error: {
					data:
						"データの読み込みに失敗しました。数分後にもう一度ログインして ください",
					login:
						"ログインに失敗しました。もう一度お試しください。メールアドレスとパスワードを再度確認してください",
				},
				success: {
					login: "ログインに成功しました",
				},
			},
		},
	},
});

export default i18n;
