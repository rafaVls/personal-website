import styles from "./Footer.module.css";

export default function Footer(): JSX.Element {
	return (
		<footer className={styles.footer}>
			<ul>
				<li>
					<a
						href="https://twitter.com/RafaelAvls"
						target="_blank"
						rel="noreferrer"
					>
						Twitter
					</a>
				</li>
				<li>
					<a href="https://github.com/rafaVls" target="_blank" rel="noreferrer">
						Github
					</a>
				</li>
			</ul>
			<p>&copy; Rafael Avilés 2021</p>
		</footer>
	);
}
