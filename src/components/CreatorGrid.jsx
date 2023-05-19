import { Box, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";

const CreatorGrid = ({ gridImages, text }) => {
	return (
		<Box
			px={{ base: 5, md: "10rem" }}
			py='10rem'
			bg='root.black'
			color={"root.gray"}>
			<VStack
				// border={"1px solid red"}
				spacing={10}
				mx='auto'>
				<Box
					mt='5'
					w={{ base: "100%", md: "100%", lg: "100%" }}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}>
					{text && (
						<Image
							src='/landing/vector-11.png'
							width={{ base: 10, md: 20 }}
						/>
					)}
					<Text
						fontSize={{ base: "lg", md: "'4xl'", lg: "5xl" }}
						fontWeight='bold'
						mb='1'
						mx='4'
						textAlign={"center"}>
						{text}
					</Text>
					{text && (
						<Image
							src='/landing/vector-11.png'
							width={{ base: 10, md: 20 }}
						/>
					)}
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

export default CreatorGrid;
