import styles from "../styles/About.module.css";

export default function About(): JSX.Element {
	return (
		<section className={styles.container}>
			<img
				src="images/profile.jpg"
				alt="Me looking at the camera, with the forest in the background."
			/>
			<div>
				<section>
					<h2>About me</h2>
					<p>
						I am a Web Developer who specializes in building high quality
						responsive websites that are accessible to as many people as
						possible. I am comfortable working with C#, Python, HTML/CSS,
						JavaScript and several of it&apos;s frameworks.
					</p>
				</section>
				<section>
					<h3>Skills</h3>
					<h3>Education</h3>
					<h4>Web Development</h4>
					<p>
						I can create websites and webapps with CEO, responsiveness, and
						accessibility in mind.
					</p>
					<h4>UI/UX Design</h4>
					<p>
						I make sure the navigation and visual experience feels intuitive and
						is made in a way that most people can use it with ease.
					</p>
				</section>
			</div>
		</section>
	);
}
