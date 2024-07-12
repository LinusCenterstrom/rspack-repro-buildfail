import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
const client = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={client}>
			<div>App</div>
		</QueryClientProvider>
	);
};
const el = document.getElementById("root");
if (!el) {
	throw new Error("Element not found");
}

const root = ReactDOM.createRoot(el);
root.render(<App />);
