import { MutableRefObject, useEffect, useRef } from "react";
import ReactTypingEffect from "react-typing-effect";

import styles from "./Main.module.css";

export default function Main(): JSX.Element {
	const professions = [
		"UI & UX Designer",
		"Technical Writer",
		"Renewables Engineer",
		"Web Developer"
	];

	return (
		<main className={styles.main}>
			<section>
				<p className={styles.normalText}>Hi there,</p>
				<p className={styles.bigText}>
					My name is <strong>Rafael Avilés</strong>
				</p>
				<div>
					<p
						className={styles.normalText}
						id="professions"
					>
						I am a {" "}
					</p>
					<ReactTypingEffect
							text={professions}
							className={styles.typewriter}
							speed={80}
							eraseSpeed={75}
							eraseDelay={2250}
							typingDelay={300}
					/>
				</div>
			</section>
			<img src="images/laptop.svg" alt="A laptop creating a website." />
			<a href="#about">&gt;</a>
		</main>
	);
}
