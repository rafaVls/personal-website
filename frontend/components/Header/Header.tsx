import Link from "next/link";
import styles from "./Header.module.css";

export default function Header(): JSX.Element {
	return (
		<>
			<header className={styles.container}>
				<h1>
					<a href="/#">&lt;Rafael /&gt;</a>
				</h1>
				<nav className={styles.navBar}>
					<ul className={styles.navList}>
						<li>
							<a href="/#">Home</a>
						</li>
						<li>
							<a href="/#about">About</a>
						</li>
						<li>
							<a href="/#portfolio">Portfolio</a>
						</li>
						<li>
							<Link href="/blog">
								<a>Blog</a>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
