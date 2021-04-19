import { Post } from "../../common/types";
import Link from "next/link";
import { PostDetails } from "../index";

interface Props {
	title: string;
	excerpt: string;
	card?: boolean;
	post?: Post;
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
						<Link href={`/author/${primary_author.slug}`}>
							<a>
								<img
									src={primary_author.profile_image}
									alt={primary_author.name}
									id="profileImage"
								/>
							</a>
						</Link>
					</figure>
					<div>
						<Link href={`/author/${primary_author.slug}`}>
							<a>
								<strong>{primary_author.name}</strong>
							</a>
						</Link>
						<PostDetails
							published_at={post.published_at}
							reading_time={post.reading_time}
						/>
					</div>
				</section>
			</>
		);
	}
}
