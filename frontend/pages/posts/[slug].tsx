import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";
import { server } from "../../config";

export default function Post({
	post
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
	return <h1>{post.title}</h1>;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const res = await fetch(`${server}/post/${params.slug}`);
	const { post } = await res.json();

	return {
		props: { post }
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch(`${server}/posts`);
	const { posts } = await res.json();

	const paths = posts.map(post => ({
		params: { slug: post.slug }
	}));

	return {
		paths,
		fallback: false
	};
};
