import { Post } from "../../common/types";
import Link from "next/link";
import { PostDetails, PostHeader } from "../index";
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
					<img
						src={feature_image}
						alt={title}
						className={styles.featureImage}
					/>
				</a>
			</Link>
			<div className={styles.postDetails}>
				<Link href={`/posts/${slug}`}>
					<a>
						<PostHeader card title={title} excerpt={excerpt} />
					</a>
				</Link>
				<PostDetails published_at={published_at} reading_time={reading_time} />
			</div>
		</>
	);
}
