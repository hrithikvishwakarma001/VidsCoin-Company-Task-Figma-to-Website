import { Box, Flex, Grid, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const CreatorFeed = () => {
	return (
		<Box overflow={"hidden"} bg='root.black' position={"relative"} py='10'>
			<HStack w='2500px' position={"relative"} left={"-100px"}>
				{[...Array(6)].map((_, i) => (
					<Text
						key={i}
						color='root.gray'
						fontSize={{ base: "2xl", md: "'4xl'", lg: "4xl" }}
						fontWeight={"800"}>
						Meet our creators ⚡
					</Text>
				))}
			</HStack>
			<Flex
				w={{ base: "100%", md: "80%", lg: "80%" }}
				gap={10}
				mx='auto'
				my='5'
				h='500px'>
				<Image src='/creators/g-3.png' alt='----' />
				<Image src='/creators/g-1.png' alt='----' />
				<Image src='/creators/g-2.png' alt='----' />
				<Image src='/creators/g-1.png' alt='----' />
				<Image src='/creators/g-2.png' alt='----' />
			</Flex>
			<Image
				src='/creators/new-1.png'
				alt='----'
				position='absolute'
				top='1%'
				right='-3%'
				w='10%'
				display={{ base: "none", md: "block", lg: "block" }}
			/>
			<Image
				src='/blog/new-2.png'
				alt='----'
				position='absolute'
				top='75%'
				left={{ base: "5%", md: "6%" }}
				w={{ base: "30%", md: "10%", lg: "8%" }}
			/>
		</Box>
	);
};

export default CreatorFeed;
