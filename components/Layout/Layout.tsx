import { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Head from "next/head";

type Props = {
	children: ReactNode;
};

export default function Layout({ children }: Props): JSX.Element {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Header />
			{children}
			<Footer />
		</>
	);
}
