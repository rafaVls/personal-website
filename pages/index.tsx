import { DetailedHTMLProps, HTMLAttributes } from "react";

export default function Home(): DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> {
	return (
		<div>
			<h1>Welcome to Next & Ghost</h1>
		</div>
	);
}
