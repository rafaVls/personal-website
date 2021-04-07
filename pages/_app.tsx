import { AppProps } from "next/app";
import { Layout } from "../components/index";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
