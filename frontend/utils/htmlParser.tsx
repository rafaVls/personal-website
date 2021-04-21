import { domToReact } from "html-react-parser";
import { Element } from "domhandler/lib/node";
import styles from "../styles/BlogPost.module.css";

const options = {
	replace
};

function replace(domNode: Element): false | void | JSX.Element {
	if (domNode instanceof Element && domNode.tagName) {
		const { tagName, attribs, children } = domNode;

		if (/h[1-2]/.test(tagName)) {
			switch (tagName) {
				case "h1":
					return <h2>{domToReact(children, options)}</h2>;

				case "h2":
					return <h3>{domToReact(children, options)}</h3>;

				default:
					break;
			}
		} else if (
			attribs.class &&
			tagName === "figure" &&
			attribs.class.includes("kg-bookmark-card")
		) {
			return (
				<figure className={styles.urlBookmark}>
					{domToReact(children, options)}
				</figure>
			);
		} else if (
			attribs.class &&
			tagName === "div" &&
			(attribs.class.includes("kg-bookmark-title") ||
				attribs.class.includes("kg-bookmark-description"))
		) {
			return <p>{domToReact(children, options)}</p>;
		} else if (
			attribs.class &&
			tagName === "figure" &&
			attribs.class.includes("kg-gallery-card")
		) {
			return (
				<figure className={styles.gallery}>
					{domToReact(children, options)}
				</figure>
			);
		}

		// Removing unnecessary classes and ids
		attribs.class = null;
		attribs.id = null;
	}
}

export default options;
