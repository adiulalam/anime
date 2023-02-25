import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "next-themes";
import Router from "next/router";
import { useEffect, useState } from "react";
import { client } from "../services/client";

export default function App({ Component, pageProps }) {
	// const [loading, setLoading] = useState(false);

	// useEffect(() => {
	// 	const start = () => {
	// 		console.log("start");
	// 		setLoading(true);
	// 	};
	// 	const end = () => {
	// 		console.log("findished");
	// 		setLoading(false);
	// 	};
	// 	Router.events.on("routeChangeStart", start);
	// 	Router.events.on("routeChangeComplete", end);
	// 	Router.events.on("routeChangeError", end);
	// 	return () => {
	// 		Router.events.off("routeChangeStart", start);
	// 		Router.events.off("routeChangeComplete", end);
	// 		Router.events.off("routeChangeError", end);
	// 	};
	// }, []);
	return (
		<ThemeProvider attribute="class">
			<ApolloProvider client={client}>
				{/* {loading ? <h1>Loading...</h1> : <Component {...pageProps} />} */}
				<Component {...pageProps} />
			</ApolloProvider>
		</ThemeProvider>
	);
}
