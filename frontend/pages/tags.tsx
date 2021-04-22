import { GetStaticProps } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { Tag } from "../common/types";
import { getTags } from "../utils/helpers";

interface Props {
	tags: Tag[];
}

export default function Tags({ tags }: Props): JSX.Element {
	const tagsContent = tags.map((tag, i) => (
		<Fragment key={i}>
			<h2>{tag.name}</h2>
			<ul>
				{tag.posts.map((post, j) => (
					<li key={j}>
						<Link href={`/tags/${tag.slug}`}>
							<a>{post.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</Fragment>
	));

	return <article>{tagsContent}</article>;
}

export const getStaticProps: GetStaticProps = async () => {
	const tags: Tag[] = await getTags();

	return {
		props: { tags }
	};
};
