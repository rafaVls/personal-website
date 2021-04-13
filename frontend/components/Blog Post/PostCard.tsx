import styles from "./PostCard.module.css";

type Props = {
	img: string;
	title: string;
	excerpt: string;
	reading_time: number;
	published_at: string;
};

export default function PostCard({
	img,
	title,
	excerpt,
	reading_time,
	published_at
}: Props): JSX.Element {
	const publishedDate = new Date(published_at).toLocaleDateString("en-GB", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});

	return (
		<>
			<img src={img} alt="" className={styles.featureImage} />
			<div className={styles.postDetails}>
				<h3>{title}</h3>
				<p>{excerpt}</p>
				<p>
					{publishedDate}
					<strong> · </strong>
					{reading_time} minute read
				</p>
			</div>
		</>
	);
}
