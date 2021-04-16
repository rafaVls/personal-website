import { Post } from "../../common/types";
import Link from "next/link";
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
	const publishedDate = new Date(published_at).toLocaleDateString("en-GB", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});

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
				<p>
					{publishedDate}
					<strong> · </strong>
					{reading_time} minute read
				</p>
			</div>
		</>
	);
}
