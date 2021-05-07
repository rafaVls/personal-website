import { PostOrPage } from "@tryghost/content-api";
import { PostDetails } from "../index";
import { formatDate } from "../../utils/helpers";

interface Props {
	title: string;
	excerpt: string;
	card?: boolean;
	post?: PostOrPage;
}

export default function PostHeader({
	card = false,
	...props
}: Props): JSX.Element {
	const { title, excerpt } = props;

	if (card) {
		return (
			<>
				<h3>{title}</h3>
				<p>{excerpt}</p>
			</>
		);
	} else {
		const { post } = props;
		const { primary_author } = props.post;

		return (
			<>
				<h2>{title}</h2>
				<p>{excerpt}</p>
				<section>
					<figure>
						<img
							src={primary_author.profile_image}
							alt={primary_author.name}
							id="profileImage"
						/>
					</figure>
					<div>
						<strong>{primary_author.name}</strong>
						<PostDetails
							published_at={formatDate(post.published_at)}
							reading_time={post.reading_time}
						/>
					</div>
				</section>
			</>
		);
	}
}
