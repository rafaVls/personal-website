import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Main, About, Portfolio } from "../components/index";

export default function Home(): DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> {
	return (
		<>
			<Main />
			<About />
			<Portfolio />
		</>
	);
}
