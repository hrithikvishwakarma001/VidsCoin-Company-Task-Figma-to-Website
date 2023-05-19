import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
const theme = extendTheme({
	config: {
		initialColorMode: "dark",
	},
	colors: {
		root: {
			white: "#ffffff",
			black: "#0d0d0d",
			teal: "#09b7ae",
			gray: "#E0E0E0",
			pink: {
				50: "#fff5f7",
				100: "#fed7e2",
				200: "#fbb6ce",
				300: "#f687b3",
				400: "#ed64a6",
				500: "#d53f8c",
				600: "#b83280",
				700: "#97266d",
				800: "#702459",
				900: "#521b41",
			},
			green: {
				100: "#c6f6d5",
				200: "#9ae6b4",
				300: "#68d391",
				400: "#48bb78",
				500: "#38a169",
				600: "#2f855a",
				700: "#276749",
				800: "#22543d",
				900: "#1c4532",
			},
		},
	},
});
ReactDOM.createRoot(document.getElementById("root")).render(
	<ChakraProvider theme={theme}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ChakraProvider>
);
