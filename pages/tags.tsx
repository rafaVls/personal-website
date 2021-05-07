import { GetStaticProps } from "next";
import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";

import GhostContentAPI from "@tryghost/content-api";
import { BlogHeader } from "../components/index";
import { TagWithPosts } from "../common/types";
import { getTags } from "../utils/helpers";

import styles from "../styles/Tags.module.css";

interface Props {
	tags: TagWithPosts[];
}

export default function Tags({ tags }: Props): JSX.Element {
	const title = "Tags | Decrypting the Web - A Blog by Rafael Avilés";
	const tagsContent = tags.map((tag, i) => (
		<Fragment key={i}>
			<h3 id={tag.slug}>{tag.name}</h3>
			<ul>
				{tag.posts.map((post, j) => (
					<li key={j}>
						<Link href={`/posts/${post.slug}`}>
							<a>{post.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</Fragment>
	));

	return (
		<>
			<Head>
				<meta
					name="description"
					content="A blog where you can read about HTML, CSS, JavaScript, React, Nodejs, and anything related to Web Development and Software Development in general."
				/>
				<meta name="robots" content="none" />
				<title>{title}</title>
			</Head>
			<main>
				<BlogHeader />
				<article className={styles.article}>{tagsContent}</article>
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

	const tags: TagWithPosts[] = await getTags(api);

	return {
		props: { tags },
		revalidate: 1
	};
};
