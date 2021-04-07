import { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type Props = {
	children: ReactNode;
};

export default function Layout({ children }: Props): JSX.Element {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
