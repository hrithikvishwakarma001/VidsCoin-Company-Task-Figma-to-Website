import { Box, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";

const GridCards = () => {
	const gridImages = [
		{ src: "/landing/card-1.png", bg: "#09B7AE" },
		{ src: "/landing/card-2.png", bg: "#FF2AAC" },
		{ src: "/landing/card-3.png", bg: "#6564CA" },
	];
	return (
		<Box
			px={{ base: 10, md: "10rem" }}
			py='10rem'
			bg='root.gray'
			color={"root.black"}
      >
			<VStack
				// border={"1px solid red"}
				mx='auto'>
				<Box w={{ base: "100%", md: "100%", lg: "100%" }}>
					<Text
						fontSize={{ base: "xl", md: "'4xl'", lg: "5xl" }}
						fontWeight='bold'
						mb='1'>
						HOW CAN YOU USE THE FUNDS?
					</Text>
				</Box>
				<Grid
					w='100%'
					templateColumns={{
						base: "repeat(1, 1fr)",
						md: "repeat(2, 1fr)",
						lg: "repeat(3, 1fr)",
					}}
					// border='1px solid red'
				>
					{gridImages &&
						gridImages.map(({ src, bg }, index) => (
							<GridItem
								key={index}
								w={{ base: "100%", md: "80%", lg: "100%" }}
								bg={bg}>
								<Image width='100%' h='100%' src={src} />
							</GridItem>
						))}
				</Grid>
			</VStack>
		</Box>
	);
};

export default GridCards;
