import "@/styles/globals.css";
import "@/styles/tailwindPreFlight.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "../services/client";

export default function App({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
