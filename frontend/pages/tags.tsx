import { GetStaticProps } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { Tag } from "../common/types";
import { getTags } from "../utils/helpers";
import styles from "../styles/Tags.module.css";

interface Props {
	tags: Tag[];
}

export default function Tags({ tags }: Props): JSX.Element {
	const tagsContent = tags.map((tag, i) => (
		<Fragment key={i}>
			<h2 id={tag.slug}>{tag.name}</h2>
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
		<main>
			<article className={styles.article}>{tagsContent}</article>
		</main>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const tags: Tag[] = await getTags();

	return {
		props: { tags }
	};
};
