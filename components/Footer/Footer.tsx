import styles from "./Footer.module.css";

export default function Footer(): JSX.Element {
	return (
		<footer className={styles.footer}>
			<p>This is a footer &copy;</p>
		</footer>
	);
}
