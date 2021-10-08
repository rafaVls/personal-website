//* This component is created to highlight code blocks in my blog articles.
//* It's made based on the node package react-highlight.js:
//? https://github.com/bvaughn/react-highlight.js

import { ReactNode, useEffect, useRef, MouseEvent, DOMElement } from "react";
import highlight from "highlight.js";

import styles from "./Highlight.module.css";

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

	function clickHandler(
		e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	): void {
		e.preventDefault();

		// This selects the contents of the code block and copies them to the clipboard.
		if (window.getSelection) {
			const selection = window.getSelection();
			const range = document.createRange();

			range.selectNodeContents(codeElement.current);
			selection.removeAllRanges();
			selection.addRange(range);
			document.execCommand("copy");

			const _ = e.target as HTMLButtonElement;
			_.textContent = "Copied ✓";
			_.style.color = "hsl(160, 84%, 39.5%)";

			setTimeout(() => {
				_.textContent = "Copy 📋";
				_.style.color = "hsl(160, 100%, 75%)";
			}, 2500);
		} else {
			console.warn("Could not select text: Unsopported browser.");
		}
	}

	return (
		<>
			<button className={styles.copyButton} onClick={e => clickHandler(e)}>
				Copy 📋
			</button>
			<code className={language} ref={codeElement}>
				{children}
			</code>
		</>
	);
}
