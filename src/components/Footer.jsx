import React from "react";
import {
	Box,
	Center,
	Text,
	Grid,
	GridItem,
	Image,
	Flex,
} from "@chakra-ui/react";
import CustomBotton from "../utils/CustomBotton";
import CustomIcon from "../utils/CustomIcon";
const Footer = () => {
	return (
		<Box
			maxW={{ base: "container.xl", md: "full" }}
			// border='1px solid red'
			fontFamily={"inter, sans-serif"}
			position={"relative"}
			bg='#e0e0e0'>
			<Center
				bg='#6564CA'
				color='root.white'
				h='65px'
				fontSize={{ base: "md", md: "lg", lg: "3xl" }}
				fontWeight='700'>
				DON’T TAKE OUR WORD, REACH OUT!
			</Center>
			<Image
				src='/landing/vectorStar.png'
				alt='Segun Adebayo'
				filter={"drop-shadow(4px 4px 0px rgba(0, 0, 0,1))"}
				// width='40px'
				position='absolute'
				width='45px'
				height='45px'
				top='150'
				left={{ base: "75%", md: "50%" }}
			/>
			<Grid
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
				}}
				gap={6}
				p={{ base: 5, md: 10 }}
				// border='1px solid red'
				h='300px'
				alignItems='center'
				fontSize='3xl'
				fontWeight='700'>
				<GridItem>
					<Box>
						<Text
							as='h1'
							fontFamily={"inter, sans-serif"}
							fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
							fontWeight='800'
							mb={{ base: "1", md: "-4" }}
							color={"rgba(0, 0, 0, 0.8)"}>
							LET’S BUILD
						</Text>
						<Text
							as='h1'
							fontFamily={"inter, sans-serif"}
							fontSize={{ base: "4xl", md: "'7xl'", lg: "8xl" }}
							fontWeight='700'
							color='#e0e0e0'
							textShadow={
								"-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;"
							}>
							THE FUTURE
						</Text>
					</Box>
				</GridItem>
				<GridItem>
					<Box
						// border='1px solid red'
						position={"relative"}>
						<Flex
							color={"rgba(0, 0, 0, 0.8)"}
							w='100%'
							// border='1px solid green'
							justifyContent='space-around'>
							<Box
							//  border='1px solid red'
							>
								<Text
									as='p'
									fontSize={{ base: "10px", md: "16px" }}
									fontWeight={700}>
									BUSINESS ENQUIRIES
								</Text>
								<Text
									as='h1'
									fontSize={{ base: "10px", md: "14px" }}
									mt='2'
									color='gray'
									fontWeight={400}>
									@whatever_info
								</Text>
							</Box>
							<Box>
								<Text
									as='p'
									fontSize={{ base: "10px", md: "16px" }}
									fontWeight={700}>
									CONTACT US
								</Text>
								<Text
									as='h1'
									fontSize={{ base: "10px", md: "14px" }}
									mt='2'
									color='gray'
									fontWeight={400}>
									+9811040789 <br /> careers@mail.com
								</Text>
							</Box>
							<Box>
								<Text
									as='p'
									fontSize={{ base: "10px", md: "16px" }}
									fontWeight={700}>
									LOCATION
								</Text>
								<Text
									as='h1'
									fontSize={{ base: "10px", md: "14px" }}
									mt='2'
									color='gray'
									fontWeight={400}>
									+9811040789
								</Text>
							</Box>
						</Flex>
					</Box>
				</GridItem>
			</Grid>
			<Flex
				justifyContent='space-between'
				p={{ base: 5, md: 10 }}
				// border='1px solid red'
			>
				<CustomBotton
					text='GET IN TOUCH'
					textColor={"root.white"}
					bgColor={"#09b7ae"}
					shadowColor={"#000"}
					size={{ base: "xs", md: "md", lg: "lg" }}
				/>
				<CustomIcon isVertical={false} bg={"root.gray"}/>
			</Flex>
		</Box>
	);
};

export default Footer;
