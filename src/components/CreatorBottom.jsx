import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import CustomBotton from "../utils/CustomBotton";

const CreatorBottom = () => {
	return (
		<Box
			overflow={"hidden"}
			bg='root.black'
			position={"relative"}
			py='10'
			mt='10'
			w='100%'>
			<Flex w={{ base: "100%", md: "80%", lg: "80%" }} mx='auto'>
				<Text
					px='4'
					as='h1'
					mt='20'
					fontFamily={"inter, sans-serif"}
					fontSize={{ base: "5xl", md: "5xl", lg: "6xl" }}
					fontWeight='600'
					color='root.black'
					textShadow={
						"-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;"
					}>
					Are you next?
				</Text>
				<Image
					src='/creators/vector-13.png'
					alt='----'
					position={"relative"}
					top='2rem'
					left='1rem'
					zIndex={5}
					display={{ base: "none", md: "block", lg: "block" }}
				/>
			</Flex>
			<Box bg='#6564CA' py='10' position={"relative"}>
				<Flex
					// border='2px solid #fff'
					alignItems={{ base: "center", md: "none" }}
					w={{ base: "100%", md: "80%", lg: "80%" }}
					mx='auto'
					justifyContent='space-between'
					flexDirection={{ base: "column", md: "row" }}
					py='5rem'>
					<Text
						display={"flex"}
						justifyContent={{ base: "flex-start", md: "center" }}
						alignItems={"center"}
						w={{ base: "80%", md: "none" }}
						// border='2px solid #fff'
						py='2'
						bg={{ base: "root.black", md: "none" }}
						px={{ base: "3.6rem", md: "1rem" }}
						as='h1'
						mt='10'
						fontFamily={"inter, sans-serif"}
						fontSize={{ base: "lg", md: "xl", lg: "4xl" }}
						fontWeight='700'
						boxShadow={{
							base: "2px 2px 0 #fff",
							md: "none",
						}}>
						1 Year <br />
						minimum
					</Text>
					<Text
						display={"flex"}
						justifyContent={{ base: "flex-start", md: "center" }}
						alignItems={"center"}
						w={{ base: "80%", md: "none" }}
						// border='2px solid #fff'
						py='2'
						bg={{ base: "root.black", md: "none" }}
						px={{ base: "3.6rem", md: "1rem" }}
						as='h1'
						mt='10'
						fontFamily={"inter, sans-serif"}
						fontSize={{ base: "lg", md: "xl", lg: "4xl" }}
						fontWeight='700'
						boxShadow={{
							base: "2px 2px 0 #fff",
							md: "none",
						}}>
						$ 100M <br />
						minimum revenue
					</Text>
					<Text
						display={"flex"}
						justifyContent={{ base: "flex-start", md: "center" }}
						alignItems={"center"}
						w={{ base: "80%", md: "none" }}
						// border='2px solid #fff'
						py='2'
						bg={{ base: "root.black", md: "none" }}
						px={{ base: "3.6rem", md: "1rem" }}
						as='h1'
						mt='10'
						fontFamily={"inter, sans-serif"}
						fontSize={{ base: "lg", md: "xl", lg: "4xl" }}
						fontWeight='700'
						boxShadow={{
							base: "2px 2px 0 #fff",
							md: "none",
						}}>
						500k <br />
						monthly views
					</Text>
				</Flex>
				<Box>
					<Image
						src='/landing/vectorStar.png'
						alt='----'
						position={"absolute"}
						top={{ base: "80%", md: "10%" }}
						left='0'
						zIndex={5}
					/>
					<Image
						src='/landing/vectorStar.png'
						alt='----'
						position={"absolute"}
						top={{ base: "95%", md: "40%" }}
						left='0'
						zIndex={5}
						w={{base:"10%",md:"3%"}}
					/>
					<Image
						src='/creators/k-4.png'
						alt='----'
						position={"absolute"}
						top='0'
						right='-20'
						zIndex={5}
						display={{ base: "none", md: "block", lg: "block" }}
						// w="3%"
					/>
				</Box>
				<Box
					bg='root.gray'
					position={"relative"}
					w='100%'
					h='120px'
					display={"flex"}
					alignItems='center'
					px={{ base: "3.6rem", md: "20rem" }}>
					<Text
						mr='5'
						color='#FF2AAC'
						fontSize={{ base: "md", md: "xl", lg: "2xl" }}
						fontWeight='700'>
						Sounds like you?
					</Text>
					<CustomBotton
						text='GET IN TOUCH'
						bgColor='#FF2AAC'
						shadowColor='#fff'
					/>
				</Box>
				<Image
					src='/creators/k-3.png'
					alt='----'
					position={"absolute"}
					bottom='8%'
					right='10%'
					display={{ base: "none", md: "block", lg: "block" }}
				/>
				<Image
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					bottom='15%'
					right='53%'
					w='5%'
					display={{ base: "none", md: "block", lg: "block" }}
				/>
				<Image
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					bottom='10%'
					right='52%'
					w='3%'
					display={{ base: "none", md: "block", lg: "block" }}
				/>
			</Box>
			<Box h='200px'>
				<Image src='/creators/scale-strip.png' alt='----' />
			</Box>
			<Image
				src='/creators/women.png'
				alt='----'
				position='absolute'
				top={{ base: "68%", md: "10%", lg: "32%" }}
				left={{ base: "10%", md: "0", lg: "0" }}
				w={{ base: "80%", md: "30%" }}
				zIndex={5}
				// display={{ base: "none", md: "block", lg: "block" }}
			/>
			<Image
				src='/creators/thug.png'
				alt='----'
				position='absolute'
				top={{ base: "72%", md: "40%" }}
				left={{ base: "27%", md: "6.5%" }}
				zIndex={5}
				w={{ base: "20%", md: "7.5%" }}
				// display={{ base: "none", md: "block", lg: "block" }}
			/>
		</Box>
	);
};

export default CreatorBottom;
