import styles from "../styles/Main.module.css";

export default function Main(): JSX.Element {
	return (
		<main className={styles.main}>
			<section>
				<p>Hi there,</p>
				<p>
					My name is <strong>Rafael Avilés</strong>
				</p>
				<p>I am a Web Developer</p>
			</section>
			<img src="images/laptop.svg" alt="" />
		</main>
	);
}
