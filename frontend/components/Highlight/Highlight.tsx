//* This component is created to highlight code blocks in my blog articles.
//* It's made based on the node package react-highlight.js:
//? https://github.com/bvaughn/react-highlight.js

import { ReactNode, useEffect, useRef } from "react";
import highlight from "highlight.js";

interface Props {
	children: ReactNode;
	language: string;
}

export default function Highlight({ children, language }: Props): JSX.Element {
	const codeElement = useRef<HTMLElement>(null);

	useEffect(() => {
		if (document && codeElement && codeElement.current) {
			highlight.highlightBlock(codeElement.current);
		}
	}, []);

	return (
		<code className={language} ref={codeElement}>
			{children}
		</code>
	);
}
