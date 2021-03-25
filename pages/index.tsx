import { DetailedHTMLProps, HTMLAttributes } from "react";
import Main from "../components/Main";
import About from "../components/About";

export default function Home(): DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> {
	return (
		<>
			<Main />
			<About />
		</>
	);
}
