import { Box, Image } from "@chakra-ui/react";
import BlogGrid from "../components/BlogGrid";
import BlogPost from "../components/BlogPost";

const Blogs = () => {
	return (
		<div>
			<BlogPost />
			<Box
				borderBottom={"10px solid gray"}
				w={{ base: "60%", md: "100%", lg: "60%" }}
        ml={{base:"2.2rem",md:"8rem"}}
        ></Box>
			<BlogGrid />
			<Image src='\creators\scale-strip.png' w='100wv' />
		</div>
	);
};

export default Blogs;
