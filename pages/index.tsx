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
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<title>Rafael Avilés | Web Developer</title>
			</Head>
			<Main />
			<About />
			<Portfolio />
		</>
	);
}
