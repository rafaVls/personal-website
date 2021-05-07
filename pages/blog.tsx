import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

import GhostContentAPI, { PostOrPage } from "@tryghost/content-api";
import { PostCard, BlogHeader } from "../components/index";
import { getPosts } from "../utils/helpers";

import styles from "../styles/Blog.module.css";

interface Props {
	posts: PostOrPage[];
}

export default function Blog({ posts }: Props): JSX.Element {
	const title = "Decrypting the Web - A Blog by Rafael Avilés";
	const description =
		"A blog where you can read about HTML, CSS, JavaScript, React, Nodejs, and anything related to Web Development and Software Development in general.";
	const postCards = posts.map((post, index) => (
		<li key={index}>
			<PostCard post={post} />
		</li>
	));

	return (
		<>
			<Head>
				<meta name="description" content={description} />
				<meta name="googlebot" content="index, follow" />
				<meta name="Twitterbot" content="index, follow" />
				<meta name="og:title" property="og:title" content={title} />
				<meta
					name="og:description"
					property="og:description"
					content={description}
				/>
				<meta
					name="og:image"
					property="og:image"
					content="/images/projects/homepage.png"
				/>
				<title>{title}</title>
			</Head>
			<main>
				<BlogHeader />

				<Link href="/tags">
					<a className={styles.browseTags}>Browse by tags</a>
				</Link>
				<ul className={styles.postCards}>{postCards}</ul>
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const api = new GhostContentAPI({
		url: process.env.GHOST_HOST,
		key: process.env.GHOST_API_KEY,
		version: "v3"
	});

	const posts = await getPosts(api);

	return {
		props: { posts },
		revalidate: 1
	};
};
