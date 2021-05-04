import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Head from "next/head";

import GhostContentAPI, { PostOrPage } from "@tryghost/content-api";
import { PostHeader } from "../../components/index";

import { getPosts, getPost, capitalize } from "../../utils/helpers";
import options from "../../utils/htmlParser";
import parse from "html-react-parser";

import styles from "../../styles/BlogPost.module.css";

interface Props {
	post: PostOrPage;
}

export default function BlogPost({ post }: Props): JSX.Element {
	const postContent = parse(post.html, options);
	const tags = post.tags.map((tag, index) => (
		<Link href={`/tags#${tag.slug}`} key={index}>
			<a>#{tag.name}</a>
		</Link>
	));

	return (
		<>
			<Head>
				<meta name="description" content={post.excerpt} />
				<title>{capitalize(post.title)} | A Blog by Rafael Avilés</title>
				<link
					rel="stylesheet"
					href="https://highlightjs.org/static/demo/styles/a11y-dark.css"
				/>
			</Head>
			<main>
				<article className={styles.article}>
					<header>
						<div>{tags}</div>
						<PostHeader title={post.title} excerpt={post.excerpt} post={post} />
					</header>
					<section>
						{post.feature_image && (
							<figure id="featureFigure">
								<img src={post.feature_image} alt={post.title} />
							</figure>
						)}
						{postContent}
					</section>
				</article>
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slugFormat = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
	const api = new GhostContentAPI({
		url: process.env.GHOST_HOST,
		key: process.env.GHOST_API_KEY,
		version: "v3"
	});

	if (typeof params.slug === "string" && slugFormat.test(params.slug)) {
		const post = await getPost(params.slug, api);

		return {
			props: { post },
			revalidate: 1
		};
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	const api = new GhostContentAPI({
		url: process.env.GHOST_HOST,
		key: process.env.GHOST_API_KEY,
		version: "v3"
	});

	const posts = await getPosts(api);
	const paths = posts.map(post => ({
		params: { slug: post.slug }
	}));

	return {
		paths,
		fallback: false
	};
};
