import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { Post } from "../../common/types";
import parse, { HTMLReactParserOptions, domToReact } from "html-react-parser";
import { Element } from "domhandler/lib/node";
import { server } from "../../config";

interface Props {
	post?: Post;
	posts?: Post[];
}

//! parse does NOT sanitize html. I gotta use a sanitizer later on the server side for this.
export default function BlogPost({ post }: Props): JSX.Element {
	const options: HTMLReactParserOptions = {
		replace: ({ tagName, children }: Element) => {
			if (tagName && tagName.startsWith("h", 0)) {
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
		<article>
			<header>
				<Link href={`/tag/${post.primary_tag.slug}`}>
					<a>{post.primary_tag.name}</a>
				</Link>
				<h2>{post.title}</h2>
				<p>{post.excerpt}</p>
				<section>
					<figure>
						<Link href={`/author/${post.primary_author.slug}`}>
							<a>
								<img
									src={post.primary_author.profile_image}
									alt={post.primary_author.name}
								/>
							</a>
						</Link>
					</figure>
					<div>
						<Link href={`/author/${post.primary_author.slug}`}>
							<a>
								<strong>{post.primary_author.name}</strong>
							</a>
						</Link>
						<p>
							{post.published_at} <strong> · </strong> {post.reading_time}{" "}
							minute read
						</p>
					</div>
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
