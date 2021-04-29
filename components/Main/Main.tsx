import { MutableRefObject, useEffect, useRef } from "react";
import styles from "./Main.module.css";

function textSequence(
	i: number,
	textElement: MutableRefObject<HTMLParagraphElement>
): void {
	const elementCurrent = textElement.current;
	const professions = [
		"UI & UX Designer",
		"Technical Writer",
		"Renewables Engineer",
		"Web Developer"
	];

	if (professions.length > i && elementCurrent) {
		setTimeout(() => {
			elementCurrent.dataset.after = professions[i];
			textSequence(++i, textElement);
		}, 4250);
	} else if (professions.length === i && elementCurrent) {
		textSequence(0, textElement);
	}
}

export default function Main(): JSX.Element {
	const paragraph: MutableRefObject<HTMLParagraphElement> = useRef();

	useEffect(() => {
		if (typeof paragraph.current !== "undefined") {
			textSequence(0, paragraph);
		}
	}, []);

	return (
		<main className={styles.main}>
			<section>
				<p className={styles.normalText}>Hi there,</p>
				<p className={styles.bigText}>
					My name is <strong>Rafael Avilés</strong>
				</p>
				<div>
					<p
						className={`${styles.normalText} ${styles.typewriter}`}
						ref={paragraph}
						data-after="Web Developer"
					>
						I am a{" "}
					</p>
				</div>
			</section>
			<img src="images/laptop.svg" alt="A laptop creating a website." />
			<a href="#about">&gt;</a>
		</main>
	);
}
