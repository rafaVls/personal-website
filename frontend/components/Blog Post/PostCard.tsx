import Link from "next/link";
import styles from "./PostCard.module.css";

type Props = {
	img: string;
	title: string;
	excerpt: string;
	reading_time: number;
	published_at: string;
	slug: string;
};

export default function PostCard({
	img,
	title,
	excerpt,
	reading_time,
	published_at,
	slug
}: Props): JSX.Element {
	const publishedDate = new Date(published_at).toLocaleDateString("en-GB", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});

	return (
		<>
			<Link href={`/posts/${slug}`}>
				<a>
					<img src={img} alt="" className={styles.featureImage} />
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
