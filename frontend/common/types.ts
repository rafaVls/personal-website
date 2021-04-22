export interface Post {
	slug: string;
	id: string;
	uuid: string;
	title: string;
	html: string;
	feature_image: string;
	featured: boolean;
	created_at: string;
	updated_at: string;
	published_at: string;
	custom_excerpt: string | null;
	tags: Tag[];
	authors: Author[];
	primary_author: Author;
	primary_tag: Tag;
	excerpt: string | null;
	reading_time: number;
	og_image: string | null;
	og_title: string | null;
	og_description: string | null;
	twitter_image: string | null;
	twitter_title: string | null;
	twitter_description: string | null;
	meta_title: string | null;
	meta_description: string | null;
	email_subject: string | null;
}

export interface Tag {
	id: string;
	name: string;
	slug: string;
	description: string | null;
	feature_image: string | null;
	meta_title: string | null;
	meta_description: string | null;
}

interface Author {
	id: string;
	name: string;
	slug: string;
	profile_image: string;
	cover_image: string | null;
	bio: string;
	website: string | null;
	location: string | null;
	facebook: string | null;
	twitter: string | null;
	meta_title: string | null;
	meta_description: string | null;
}
