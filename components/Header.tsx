import { ReactNode } from "react";
import styles from "../styles/Header.module.css";

interface Props {
	children: ReactNode;
}

export default function Header({ children }: Props): JSX.Element {
	return (
		<>
			<header className={styles.container}>
				<h1>
					<a href="#">&lt;Rafael /&gt;</a>
				</h1>
				<nav className={styles.navBar}>
					<ul className={styles.navList}>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#">Blog</a>
						</li>
						<li>
							<a href="#">Portfolio</a>
						</li>
					</ul>
				</nav>
			</header>
			{children}
		</>
	);
}
