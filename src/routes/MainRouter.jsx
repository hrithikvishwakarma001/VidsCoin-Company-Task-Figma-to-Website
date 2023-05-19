import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Creators from "../pages/Creators";
import Blogs from "../pages/Blogs";
import Faq from "../pages/Faq";
import Home from "../pages/Home";

const rootes = [
	{ path: "/", element: <Home /> },
	{ path: "/about", element: <About /> },
	{ path: "/creators", element: <Creators /> },
	{ path: "/blog", element: <Blogs /> },
	{ path: "/faq", element: <Faq /> },
];

const MainRouter = () => {
	return (
		<Routes>
			{rootes.map((route, index) => (
				<Route key={index} path={route.path} element={route.element} />
			))}
		</Routes>
	);
};

export default MainRouter;
