import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRouter from "./routes/MainRouter";
import { Container, Box } from "@chakra-ui/react";
function App() {
	return (
		<Box bg='root.black' color='root.white'>
			<Container maxW='container.2xl' p='0'>
				<Navbar />
				<MainRouter />
				<Footer />
			</Container>
		</Box>
	);
}

export default App;
