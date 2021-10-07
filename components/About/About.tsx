import { MouseEvent, useState } from "react";
import styles from "./About.module.css";

const skills: JSX.Element = (
	<>
		<h4>Web Development</h4>
		<p>
			I can create websites and webapps with accessibility, responsiveness and
			SEO in mind.
		</p>
		<h4>UI/UX Design</h4>
		<p>
			I make sure the navigation and visual experience feels intuitive and is
			made in a way that most people can use it with ease.
		</p>
	</>
);

const education: JSX.Element = (
	<>
		<h4>B.S. Renewable Energies Engineering</h4>
		<p>Mexicali&apos;s Technological Institute, 2013-2021</p>
		<h4>High School</h4>
		<p>CoBachBC - Ciudad Morelos, 2010-2013</p>
	</>
);

export default function About(): JSX.Element {
	const [variableText, setVariableText] = useState(skills);

	function clickHandler(
		e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
	): void {
		document
			.getElementsByClassName(styles.selected)[0]
			.classList.remove(styles.selected);
		e.preventDefault();
		e.currentTarget.classList.add(styles.selected);

		const buttonName = e.currentTarget.name;

		if (buttonName === "skills") {
			setVariableText(skills);
		} else if (buttonName === "education") {
			setVariableText(education);
		}
	}

	return (
		<section className={styles.container} id="about">
			<img
				src="images/profile.png"
				alt="Me looking at the camera, with the forest in the background."
				loading="lazy"
			/>
			<div className={styles.textContainer}>
				<section>
					<h2>About me</h2>
					<p>
						I am a Web Developer who specializes in building high quality
						responsive websites that are accessible to as many people as
						possible. I am comfortable working with C#, Python, HTML/CSS,
						JavaScript and several of its frameworks.
					</p>
				</section>
				<section className={styles.skillsAndEducation}>
					<div className={styles.headers}>
						<h3>
							<button
								className={styles.selected}
								onClick={e => clickHandler(e)}
								name="skills"
							>
								Skills
							</button>
						</h3>
						<h3>
							<button onClick={e => clickHandler(e)} name="education">
								Education
							</button>
						</h3>
					</div>
					{variableText}
				</section>
			</div>
		</section>
	);
}
