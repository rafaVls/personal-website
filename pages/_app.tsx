import { AppProps } from "next/app";
import Header from "../components/Header";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<Header>
			<Component {...pageProps} />
		</Header>
	);
}
