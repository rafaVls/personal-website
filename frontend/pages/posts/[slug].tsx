import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { PostHeader } from "../../components/index";
import { Post } from "../../common/types";
import { getPosts, getPost } from "../../utils/helpers";
import parse from "html-react-parser";
import options from "../../utils/htmlParser";
import styles from "../../styles/BlogPost.module.css";

interface Props {
	post: Post;
}

export default function BlogPost({ post }: Props): JSX.Element {
	//! parse does NOT sanitize html. I gotta use a sanitizer later on the server side for this.
	const postContent = parse(post.html, options);
	const tags = post.tags.map((tag, index) => (
		<Link href={`/tag/${tag.slug}`} key={index}>
			<a>#{tag.name}</a>
		</Link>
	));

	return (
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
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const post: Post = await getPost(params.slug);

	return {
		props: { post }
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const posts: Post[] = await getPosts();
	const paths = posts.map(post => ({
		params: { slug: post.slug }
	}));

	return {
		paths,
		fallback: false
	};
};
