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
				<li>
					<a href="https://www.linkedin.com/in/rafael-avil%C3%A9s/" target="_blank" rel="noreferrer">
						LinkedIn
					</a>
				</li>
			</ul>
			<p>Made by Rafael Avilés Fierro - rafa.vfierro@outlook.com</p>
		</footer>
	);
}
