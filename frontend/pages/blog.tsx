import { GetStaticProps } from "next";
import Link from "next/link";
import { Post } from "../common/types";
import { getPosts } from "../utils/helpers";
import { PostCard } from "../components/index";
import styles from "../styles/Blog.module.css";

interface Props {
	posts: Post[];
}

export default function Blog({ posts }: Props): JSX.Element {
	const postCards = posts.map((post, index) => (
		<li key={index}>
			<PostCard post={post} />
		</li>
	));

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

			<Link href="/tags">
				<a>Browse by tags</a>
			</Link>
			<ul className={styles.postCards}>{postCards}</ul>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts: Post[] = await getPosts();

	return {
		props: { posts }
	};
};
