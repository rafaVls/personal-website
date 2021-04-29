import { PostOrPage, Tag } from "@tryghost/content-api";

export interface TagWithPosts extends Tag {
	posts?: PostOrPage[];
}
