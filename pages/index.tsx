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
				<meta name="description" content={description} />
				<meta name="og:title" property="og:title" content={title} />
				<meta name="google-site-verification" content="PS0KpjPDRregeC1qRsWLwMgSC7WZc499VNzRfTzFEIw" />
				<meta
					name="og:image"
					property="og:image"
					content="/images/projects/homepage.png"
				/>
				<meta
					name="og:description"
					property="og:description"
					content={description}
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
				<title>{title}</title>
			</Head>
			<Main />
			<About />
			<Portfolio />
			<ContactForm />
		</>
	);
}
