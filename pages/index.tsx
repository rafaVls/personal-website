import { DetailedHTMLProps, HTMLAttributes } from "react";
import Main from "../components/Main";

export default function Home(): DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> {
	return (
		<>
			<Main />
		</>
	);
}
