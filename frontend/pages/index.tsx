import Head from "next/head";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Main, About, Portfolio } from "../components/index";

export default function Home(): DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="Landing page where you can see my skills, my portfolio containing my projects, and my education."
				/>
				<title>Rafael Avilés | Web Developer</title>
			</Head>
			<Main />
			<About />
			<Portfolio />
		</>
	);
}
