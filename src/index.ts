const ReactDOMServer = require(process.env.NODE_ENV !== "production"
	? "../node_modules/react-dom/cjs/react-dom-server-legacy.browser.development"
	: "../node_modules/react-dom/cjs/react-dom-server-legacy.browser.production.min.js");

ReactDOMServer.renderToString(
	React.createElement("div", null, "Hello, world!")
);
