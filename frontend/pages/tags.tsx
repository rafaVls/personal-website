import { GetStaticProps } from "next";
import { Tag } from "../common/types";
import { server } from "../config";

interface Props {
	tags: Tag[];
}

export default function Tags({ tags }: Props): JSX.Element {
	return <div>You got here!</div>;
}

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch(`${server}/tags`);
	const tags: Tag[] = await res.json();

	return {
		props: { tags }
	};
};
