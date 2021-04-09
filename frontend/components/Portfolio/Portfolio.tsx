import Card from "./Card";
import Projects, { Project } from "./Projects";
import styles from "./Portfolio.module.css";

export default function Portfolio(): JSX.Element {
	const cards = Projects.map((project: Project, index: number) => (
		<Card
			key={index}
			imgSrc={project.img}
			title={project.title}
			description={project.description}
			stack={project.stack}
			link={project.link}
			github={project.repo}
		/>
	));

	return (
		<section className={styles.container} id="portfolio">
			<h5>Portfolio</h5>
			<div className={styles.cardGrid}>{cards}</div>
		</section>
	);
}
