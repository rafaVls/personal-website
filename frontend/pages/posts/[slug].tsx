import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { PostHeader } from "../../components/index";
import { Post } from "../../common/types";
import { getPosts, getPost } from "../../utils/helpers";
import parse, { HTMLReactParserOptions, domToReact } from "html-react-parser";
import { Element } from "domhandler/lib/node";
import styles from "../../styles/BlogPost.module.css";

interface Props {
	post: Post;
}

//! parse does NOT sanitize html. I gotta use a sanitizer later on the server side for this.
export default function BlogPost({ post }: Props): JSX.Element {
	const options: HTMLReactParserOptions = {
		replace: ({ tagName, children }: Element) => {
			if (tagName && /h[1-2]/.test(tagName)) {
				switch (tagName) {
					case "h1":
						return <h2>{domToReact(children, options)}</h2>;

					case "h2":
						return <h3>{domToReact(children, options)}</h3>;

					default:
						break;
				}
			}
		}
	};
	const postContent = parse(post.html, options);

	return (
		<article className={styles.article}>
			<header>
				<Link href={`/tag/${post.primary_tag.slug}`}>
					<a>{post.primary_tag.name}</a>
				</Link>
				<PostHeader title={post.title} excerpt={post.excerpt} post={post} />
			</header>
			<section>
				{post.feature_image && (
					<img src={post.feature_image} alt={post.title} id="featureImage" />
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
