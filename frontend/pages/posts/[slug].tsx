import { GetStaticProps, GetStaticPaths } from "next";
import { Post } from "../../common/types";
import parse from "html-react-parser";
import { server } from "../../config";

interface Props {
	post?: Post;
	posts?: Post[];
}

export default function BlogPost({ post }: Props): JSX.Element {
	const postContent = parse(post.html);

	return (
		<article>
			<header>
				<a>{post.primary_tag.name}</a>
				<h2>{post.title}</h2>
				<p>{post.excerpt}</p>
				<section>
					<figure>
						<img
							src={post.primary_author.profile_image}
							alt={post.primary_author.name}
						/>
					</figure>
					<p>
						{post.published_at} <strong> · </strong> {post.reading_time} minute
						read
					</p>
				</section>
			</header>
			<section>
				<img src={post.feature_image} alt={post.title} />
				{postContent}
			</section>
		</article>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const res = await fetch(`${server}/post/${params.slug}`);
	const { post }: Props = await res.json();

	return {
		props: { post }
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch(`${server}/posts`);
	const { posts }: Props = await res.json();

	const paths = posts.map(post => ({
		params: { slug: post.slug }
	}));

	return {
		paths,
		fallback: false
	};
};
