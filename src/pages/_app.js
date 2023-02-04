import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "next-themes";
import { client } from "../services/client";

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</ThemeProvider>
	);
}
