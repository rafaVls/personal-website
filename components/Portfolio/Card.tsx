import styles from "./Card.module.css";

type Props = {
	imgSrc: string;
	title: string;
	description: string;
	stack: string[];
	link: string;
	github: string;
};

export default function Card({
	imgSrc,
	title,
	description,
	stack,
	link,
	github
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
			<p data-before="Stack">
				{stack.map((item, index) =>
					index !== stack.length - 1 ? `${item}, ` : item
				)}
			</p>
			<div>
				<a href={github} target="_blank" rel="noreferrer">
					<img src="/images/github.svg" alt="Github" title="Github repo" />
				</a>
				<a href={link}>
					<img src="/images/link.svg" alt="Website" title="Website" />
				</a>
			</div>
		</div>
	);
}
