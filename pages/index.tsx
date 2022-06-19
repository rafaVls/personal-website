import Head from "next/head";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Main, About, Portfolio, ContactForm } from "../components/index";

export default function Home(): DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> {
	const title = "Rafael Avilés | Web Developer";
	const description =
		"This is a personal website where you can see my skills, my portfolio containing my projects, and my education.";

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />

				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content="/images/projects/homepage.png" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta
					name="twitter:image:src"
					content="/images/projects/homepage.png"
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
			</Head>
			<Main />
			<About />
			<Portfolio />
			{/* 
			gmail removed the ability to login through code,
			and I'm not bothered to read through their API. 
			I'm removing this for now
			<ContactForm /> */}
		</>
	);
}
