interface Props {
	published_at: string;
	reading_time: number;
}

export default function PostDetails({
	published_at,
	reading_time
}: Props): JSX.Element {
	return (
		<p>
			{published_at} <strong> · </strong> {reading_time} minute read
		</p>
	);
}
