import { GetStaticProps, InferGetStaticPropsType } from "next";
import { server } from "../config";
import styles from "../styles/Blog.module.css";

interface Post {
	title: string;
}

export default function Blog({
	posts
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
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

			<section>
				<ul>
					{posts.map((post: Post, index: number) => (
						<li key={index}>{post.title}</li>
					))}
				</ul>
			</section>
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
