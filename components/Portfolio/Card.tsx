import styles from "./Card.module.css";

export default function Card(): JSX.Element {
	return (
		<div className={styles.card}>
			<img
				src="images/Homepage.png"
				alt="Screenshot of the project's webpage."
			/>
			<div className={styles.line}></div>
			<p data-before="Title">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
				delectus non dolores rem consequuntur error.
			</p>
		</div>
	);
}
