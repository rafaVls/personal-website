import { GetStaticProps, InferGetStaticPropsType } from "next";
import { server } from "../config";
import { PostCard } from "../components/index";
import styles from "../styles/Blog.module.css";

interface Post {
	title: string;
	excerpt: string;
	feature_image: string;
	reading_time: number;
	published_at: string;
	slug: string;
}

export default function Blog({
	posts
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
	// TODO: Adding a element inside the Link element causes some layout issues

	return (
		<>
			<span className={styles.container}>
				<h2>
					A blog by{" "}
					<a
						href="https://www.twitter.com/RafaelAvls"
						target="_blank"
						rel="noreferrer"
					>
						Rafael Avilés
					</a>
				</h2>
			</span>

			<a href="/tags">Browse by tags</a>

			<ul className={styles.postCards}>
				{posts.map((post: Post, index: number) => (
					<li key={index}>
						<PostCard
							img={post.feature_image}
							title={post.title}
							excerpt={post.excerpt}
							reading_time={post.reading_time}
							published_at={post.published_at}
							slug={post.slug}
						/>
					</li>
				))}
			</ul>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(`${server}/posts`);
	const { posts } = await res.json();

	return {
		props: { posts }
	};
};
