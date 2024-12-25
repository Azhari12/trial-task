import { RouterProvider } from "react-router";
import { router } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "./store/store";

import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<RouterProvider router={router} />
					<Toaster richColors closeButton />
					<LanguageSwitcher />
				</Provider>
			</QueryClientProvider>
		</>
	);
}

export default App;
