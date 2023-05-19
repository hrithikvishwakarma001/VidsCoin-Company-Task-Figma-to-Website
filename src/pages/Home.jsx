import CreatorGrid from "../components/CreatorGrid";
import GridCards from "../components/GridCards";
import LandingCards from "../components/LandingCards";
import LandingCreator from "../components/LandingCreator";
import LandingPoster from "../components/LandingPoster";

const Home = () => {
	const gridImages = [
		{ src: "/landing/grid-1.png", bg: "#FF2AAC" },
		{ src: "/landing/grid-2.png", bg: "#263181" },
		{ src: "/landing/grid-3.png", bg: "#09B7AE" },
		{ src: "/landing/grid-4.png", bg: "#6564CA" },
		{ src: "/landing/grid-5.png", bg: "#FF2AAC" },
		// { src: "/landing/grid-6.png", bg: "black" },
	];
	const anotherGrid = [
		{ src: "/landing/grid-6.png", bg: "#000" },
		{ src: "/landing/grid-7.png", bg: "#000" },
		{ src: "/landing/grid-8.png", bg: "#000" },
		{ src: "/landing/grid-9.png", bg: "#000" },
		// { src: "/landing/grid-6.png", bg: "black" },
	];
	return (
		<div>
			<LandingPoster />
			<LandingCards />
			<LandingCreator />
			<GridCards />
			<CreatorGrid
				gridImages={gridImages}
				text={"CREATOR AGENCY BENIFITS"}
			/>
			<CreatorGrid gridImages={anotherGrid} text={"WHY GO WITH VIDS?"} />
		</div>
	);
};

export default Home;
