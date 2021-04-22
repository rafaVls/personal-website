import { GetStaticProps } from "next";
import { Tag } from "../common/types";
import { getTags } from "../utils/helpers";

interface Props {
	tags: Tag[];
}

export default function Tags({ tags }: Props): JSX.Element {
	return <div>You got here!</div>;
}

export const getStaticProps: GetStaticProps = async () => {
	const tags: Tag[] = await getTags();

	return {
		props: { tags }
	};
};
