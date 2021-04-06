import Card from "./Card";
import Projects, { Project } from "./Projects";
import styles from "./Portfolio.module.css";

export default function Portfolio(): JSX.Element {
	const cards = Projects.map((project: Project, index: number) => {
		return (
			<Card
				key={index}
				imgSrc={project.img}
				title={project.title}
				description={project.description}
			/>
		);
	});

	return (
		<section className={styles.container} id="portfolio">
			<h5>Portfolio</h5>
			<div className={styles.cardGrid}>{cards}</div>
		</section>
	);
}
