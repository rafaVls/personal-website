import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en" prefix="og: http://ogp.me/ns#">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
