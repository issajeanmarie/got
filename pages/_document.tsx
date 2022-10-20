import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

type Props = null;

class Document extends NextDocument<Props> {
	render = (): JSX.Element => {
		return (
			<Html>
				<Head>
					<link rel="icon" href="/icons/logo.svg" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Russo+One&display=swap"
						rel="stylesheet"
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	};
}

export default Document;
