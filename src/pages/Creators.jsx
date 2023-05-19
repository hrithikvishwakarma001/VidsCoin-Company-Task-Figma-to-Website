import React from "react";
import CreatorPoster from "../components/CreatorPoster";
import CreatorFeed from "../components/CreatorFeed";
import CreatorBottom from "../components/CreatorBottom";

const Creators = () => {
	return (
		<div>
			<CreatorPoster />
			<CreatorFeed />
			<CreatorBottom />
		</div>
	);
};

export default Creators;
