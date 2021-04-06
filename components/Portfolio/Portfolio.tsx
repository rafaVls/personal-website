import Card from "./Card";
import styles from "./Portfolio.module.css";

export default function Portfolio(): JSX.Element {
	return (
		<section className={styles.container} id="portfolio">
			<h5>Portfolio</h5>
			<div className={styles.cards}>
				<Card />
				<Card />
			</div>
		</section>
	);
}
