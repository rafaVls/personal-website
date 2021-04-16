import { GetStaticProps } from "next";
import { server } from "../config";
import { Post } from "../common/types";
import { PostCard } from "../components/index";
import styles from "../styles/Blog.module.css";

interface Props {
	posts: Post[];
}

export default function Blog({ posts }: Props): JSX.Element {
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
				{posts.map((post, index) => (
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
