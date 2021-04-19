import Link from "next/link";
import { useEffect } from "react";
import styles from "./Header.module.css";

const debounce = fn => {
	let frame;
	return (...params) => {
		if (frame) {
			cancelAnimationFrame(frame);
		}

		frame = requestAnimationFrame(() => {
			fn(...params);
		});
	};
};

const storeScroll = (): void => {
	document.documentElement.dataset.scroll = window.scrollY.toString();
};

export default function Header(): JSX.Element {
	useEffect(() => {
		if (document) {
			document.addEventListener("scroll", debounce(storeScroll), {
				passive: true
			});
			storeScroll();
		}
	}, []);

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
