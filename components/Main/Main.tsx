import styles from "./Main.module.css";

export default function Main(): JSX.Element {
	return (
		<main className={styles.main}>
			<section>
				<p className={styles.normalText}>Hi there,</p>
				<p className={styles.bigText}>
					My name is <strong>Rafael Avilés</strong>
				</p>
				<p className={styles.normalText}>I am a Web Developer</p>
			</section>
			<img src="images/laptop.svg" alt="A laptop creating a website." />
			<a href="#about">&gt;</a>
		</main>
	);
}
