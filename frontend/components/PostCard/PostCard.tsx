import { Post } from "../../common/types";
import Link from "next/link";
import { PostDetails } from "../index";
import styles from "./PostCard.module.css";

interface Props {
	post: Post;
}

export default function PostCard({ post }: Props): JSX.Element {
	const {
		feature_image,
		title,
		excerpt,
		reading_time,
		published_at,
		slug
	} = post;

	return (
		<>
			<Link href={`/posts/${slug}`}>
				<a>
					<img src={feature_image} alt="" className={styles.featureImage} />
				</a>
			</Link>
			<div className={styles.postDetails}>
				<Link href={`/posts/${slug}`}>
					<a>
						<h3>{title}</h3>
						<p>{excerpt}</p>
					</a>
				</Link>
				<PostDetails published_at={published_at} reading_time={reading_time} />
			</div>
		</>
	);
}
