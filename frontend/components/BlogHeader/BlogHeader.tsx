import styles from "./BlogHeader.module.css";

export default function BlogHeader(): JSX.Element {
	return (
		<span className={styles.container}>
			<h2>
				A blog by{" "}
				<a
					href="https://www.twitter.com/RafaelAvls"
					target="_blank"
					rel="noreferrer"
				>
					Rafael Avilés
				</a>
			</h2>
		</span>
	);
}
