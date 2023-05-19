import CreatorAbout from "../components/CreatorAbout";
import CreatorGrid from "../components/CreatorGrid";
import GridAbout from "../components/GridAbout";
import HeadingAbout from "../components/HeadingAbout";
import LandingPosterAbout from "../components/LandingPosterAbout";

const About = () => {
	const gridImages = [
		{ src: "/landing/grid-1.png", bg: "#FF2AAC" },
		{ src: "/landing/grid-2.png", bg: "#263181" },
		{ src: "/landing/grid-3.png", bg: "#09B7AE" },
		{ src: "/landing/grid-4.png", bg: "#6564CA" },
		{ src: "/landing/grid-5.png", bg: "#FF2AAC" },
		// { src: "/landing/grid-6.png", bg: "black" },
	];
	return (
		<div>
			<LandingPosterAbout />
			<HeadingAbout />
			{/* <GridAbout/> */}
			<CreatorGrid gridImages={gridImages} />
			{/* <CreatorAbout /> */}
		</div>
	);
};

export default About;
