import { useRouter } from "next/router";
import styles from "./Header.module.css";

export default function Header(): JSX.Element {
	const pathname = useRouter().pathname;
	const homeHref = pathname === "/" ? "#" : "/";

	return (
		<>
			<header className={styles.container}>
				<h1>
					<a href={homeHref}>&lt;Rafael /&gt;</a>
				</h1>
				<nav className={styles.navBar}>
					<ul className={styles.navList}>
						<li>
							<a href={homeHref}>Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="/blog">Blog</a>
						</li>
						<li>
							<a href="#portfolio">Portfolio</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
