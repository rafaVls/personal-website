import { domToReact } from "html-react-parser";
import { Element } from "domhandler/lib/node";
import { Highlight } from "../components/index";
import styles from "../styles/BlogPost.module.css";

const options = {
	replace
};

function replace(domNode: Element): false | void | JSX.Element {
	if (domNode instanceof Element && domNode.tagName) {
		const { tagName, attribs, children } = domNode;

		// Because the header tag already has an h1,
		// replace any h1 tags to h2, h2 to h3 and so on
		if (/h[1-5]/.test(tagName)) {
			switch (tagName) {
				case "h1":
					return <h2>{domToReact(children, options)}</h2>;

				case "h2":
					return <h3>{domToReact(children, options)}</h3>;

				case "h3":
					return <h4>{domToReact(children, options)}</h4>;

				case "h4":
					return <h5>{domToReact(children, options)}</h5>;

				case "h5":
					return <h6>{domToReact(children, options)}</h6>;

				default:
					break;
			}
		}

		if (attribs.class) {
			const classes = attribs.class;

			if (tagName === "figure") {
				// kg-bookmark-card is how Ghost calls the url bookmarks,
				// which contains a bookmark-title and bookmark-description
				// kg-gallery-card is how they call their image galleries
				if (classes.includes("kg-bookmark-card")) {
					return (
						<figure className={styles.urlBookmark}>
							{domToReact(children, options)}
						</figure>
					);
				} else if (classes.includes("kg-gallery-card")) {
					return (
						<figure className={styles.gallery}>
							{domToReact(children, options)}
						</figure>
					);
				}
			} else if (
				tagName === "div" &&
				(classes.includes("kg-bookmark-title") ||
					classes.includes("kg-bookmark-description"))
			) {
				return <p>{domToReact(children, options)}</p>;
			} else if (tagName === "code" && classes.includes("language")) {
				const language = classes.split("-")[1];

				return (
					<Highlight language={language}>
						{domToReact(children, options)}
					</Highlight>
				);
			}
		}

		// Removing unnecessary classes and ids
		attribs.class = null;
		attribs.id = null;
	}
}

export default options;
