import { Box, Grid, Image } from "@chakra-ui/react";

const BlogGrid = () => {
	return (
		<Box
			w={{ base: "100%", md: "100%", lg: "100%" }}
			m={{ base: "auto", md: "auto", lg: "auto" }}
			mb={{ base: "10rem", md: "10rem", lg: "10rem" }}>
			<Grid
				py='10'
				// border='1px solid red'
				align={"center"}
				w={{ base: "100%", md: "100%", lg: "85%" }}
				mx={{ base: "auto", md: "auto", lg: "auto" }}
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
					lg: "repeat(3, 1fr)",
				}}
				gap={6}>
				<Box
					// w={{ base: "80%", md: "80%", lg: "100%" }}
					position={"relative"}>
					<Image
						src='\blog\g1.png'
						alt='----'
						width={"80%"}
						h={"80%"}
						objectFit={"cover"}
					/>
					<Image
						src='\blog\g-1.png'
						alt='----'
						position={"absolute"}
						top={"55%"}
						left={"15%"}
						w='75%'
						cursor='pointer'
					/>
					<Image
						src='\blog\giz.png'
						alt='----'
						position={"absolute"}
						top={"60%"}
						left={"-4%"}
						w='25%'
						objectFit={"cover"}
					/>
				</Box>
				<Box
					// w={{ base: "80%", md: "80%", lg: "100%" }}
					position={"relative"}>
					<Image
						src='\blog\g2.png'
						alt='----'
						width={"80%"}
						h={"80%"}
						objectFit={"cover"}
					/>
					<Image
						src='\blog\g-2.png'
						alt='----'
						position={"absolute"}
						top={"55%"}
						left={"2"}
						w='100%'
						objectFit={"cover"}
						cursor='pointer'
					/>

					<Image
						src='\blog\f.png'
						alt='----'
						position={"absolute"}
						top={"2%"}
						left={"12%"}
						w='16%'
					/>
				</Box>
				<Box
					display={{ base: "none", md: "inline-block" }}
					w={{ base: "80%", md: "80%", lg: "100%" }}
					position={"relative"}>
					<Image
						src='\blog\g3.png'
						alt='----'
						width={{ base: "100%", md: "80%" }}
						h={"80%"}
						objectFit={"cover"}
					/>

					<Image
						cursor='pointer'
						src='\blog\g-3.png'
						alt='----'
						position={"absolute"}
						top={"55%"}
						left={"16%"}
						w={{ base: "90%", md: "69%" }}
						objectFit={"cover"}
					/>
				</Box>
			</Grid>
		</Box>
	);
};

export default BlogGrid;
