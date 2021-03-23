import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function Header({ children }: Props): JSX.Element {
	return (
		<>
			<header>
				<h1>&lt;Rafael /&gt;</h1>
				<nav>
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About</a>
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
