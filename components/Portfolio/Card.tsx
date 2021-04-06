import styles from "./Card.module.css";

type Props = {
	imgSrc: string;
	title: string;
	description: string;
};

export default function Card({
	imgSrc,
	title,
	description
}: Props): JSX.Element {
	return (
		<div className={styles.card}>
			<img
				src={imgSrc}
				alt="Screenshot of the project's webpage."
				loading="lazy"
			/>
			<div className={styles.line}></div>
			<p data-before={title}>{description}</p>
		</div>
	);
}
