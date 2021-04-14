import { GetStaticProps, GetStaticPaths } from "next";

export default function Post(): JSX.Element {
	return <h1>Blog post</h1>;
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {}
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { slug: "1" } }, { params: { slug: "2" } }],
		fallback: false
	};
};
