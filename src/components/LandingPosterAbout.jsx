import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import CustomBotton from "../utils/CustomBotton";

const LandingPosterAbout = () => {
	return (
		<Box
			overflow='hidden'
			m='10'
			mt={{ base: "10", md: "10" }}
			border={"1px solid #E0E0E0"}
			justifyContent={"space-between"}
			display='flex'
			flexDirection={{ base: "column", md: "row" }}
			alignItems='center'
			px={{ base: "1rem", md: "0" }}>
			<Box
				ml={{ base: "0", md: "'70'", lg: "70" }}
				w={{ base: "100%", md: "50%", lg: "50%" }}>
				<Box letterSpacing={"1"} position={"relative"}>
					<Image
						src='\about us\Group 32988.png'
						alt='----'
						style={{
							position: "absolute",
							width: "703px",
						}}
						top={{ base: "10%", md: "-50%", lg: "-20%" }}
					/>
					<Text
						fontSize={{ base: "2xl", md: "4xl", lg: "7xl" }}
						style={{
							// width: "757px",
							// height: "91px",
							fontFamily: "'Archivo'",
							fontStyle: "normal",
							fontWeight: "800",
							color: "#E0E0E0",
						}}
						pt={{ base: "4rem" }}>
						Let’s Build The Future
					</Text>
					<Text
						display={{ base: "none", md: "block" }}
						style={{
							// width: "686px",
							// height: "91px",
							fontFamily: "'Archivo'",
							fontStyle: "normal",
							fontWeight: "300",
							fontSize: "16px",
							textAlign: "justify",
							color: "#E0E0E0",
						}}>
						Founders at VIDS are some of the top digital creators
						established in India. With the establishment in 2016,
						they cracked the digital content industry. The team
						understands the future of digital content and
						subsequently, VIDS was started as a project in 2020
						wherein they first built themselves as creators with
						more than 6m+ followers and more than 1 Billion minutes
						of viewership.
					</Text>{" "}
				</Box>{" "}
				<Box
					display='flex'
					justifyContent='space-between'
					mt='10'
					w={{ base: "100%", md: "100%", lg: "100%" }}
					// border={"1px solid red"}
				>
					<CustomBotton
						text="I'm a creator"
						bgColor='root.teal'
						shadowColor='#E0E0E0'
						textColor='root.white'
						size='md'
						width='45%'
					/>
					<CustomBotton
						text='Funding Calculator'
						bgColor='root.teal'
						shadowColor='#E0E0E0'
						textColor='root.white'
						size='md'
						width='48%'
					/>
				</Box>
			</Box>
			<Box
				// border='1px solid red'
				position={"relative"}>
				<Box zIndex={2} position={"relative"}>
					<Image
						src='/creators/vector-12.png'
						alt='----'
						position={"absolute"}
						top={"16%"}
						left={{ base: "55%", md: "52%" }}
						w='10%'
					/>
					<Image
						src='/creators/vector-12.png'
						alt='----'
						position={"absolute"}
						top={"26%"}
						left={{ base: "19%", md: "18%" }}
						w='10%'
					/>
					<Image
						transform={"rotate(5deg)"}
						src='/about us/strip-1.png'
						alt='----'
						position={"absolute"}
						top={"-10%"}
						left={"10%"}
						w='100%'
						zIndex={-1}
						display={{ base: "none", md: "block" }}
					/>
					<Image
						transform={"rotate(-70deg)"}
						src='/about us/strip-1.png'
						alt='----'
						position={"absolute"}
						top={"35%"}
						left={"10%"}
						w='100%'
						zIndex={10}
					/>
					{/* <Image src='/landing/poster.png' alt='----' /> */}
					<Flex zIndex={1} m='auto'>
						<Image
							src='\about us\Group (1).png'
							alt='----'
							width='80%'
							h='75%'
							mt='25%'
						/>
						<Image
							src='\about us\Group (3).png'
							alt='----'
							width='80%'
							h='75%'
							mt='13%'
							mr={{ base: "0", md: "10" }}
						/>
					</Flex>
					<Image
						src='/about us/vids-1.png'
						alt='----'
						zIndex={-1}
						position={"absolute"}
						top={"35%"}
						left='-15%'
						w='25%'
					/>
					<Image
						src='/about us/s-1.png'
						alt='----'
						zIndex={-1}
						position={"absolute"}
						top={"10%"}
						right='0%'
						w='40%'
					/>
					<Image
						opacity={0.7}
						src='/about us/em.png'
						alt='----'
						zIndex={-2}
						position={"absolute"}
						top={"-1%"}
						left='15%'
						w='60%'
						display={{ base: "none", md: "block" }}
					/>
					<HStack
						position={"absolute"}
						top={"80%"}
						left='-5%'
						width={{ base: "15%", md: "40%", lg: "30%" }}
						align={"center"}
						// border={"1px solid red"}
						spacing={"0"}>
						<Image src='/landing/k-4.png' alt='----' zIndex={-1} />
						<Image src='/landing/k-1.png' alt='----' zIndex={-1} />
					</HStack>
					<Image
						src='/landing/k-6.png'
						alt='----'
						zIndex={-1}
						position={"absolute"}
						top={"80%"}
						left={"70%"}
						w='25%'
					/>
				</Box>
				<Image
					src='/about us/s-1.png'
					alt='----'
					position={"absolute"}
					top={"18%"}
					left='55%'
					width={"10%"}
					display={{ base: "none", md: "inline-block" }}
				/>
				<Image
					src='/about us/s-1.png'
					alt='----'
					position={"absolute"}
					top={"60%"}
					left='15%'
					width={"20%"}
					display={{ base: "none", md: "inline-block" }}
				/>

				<Image
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					top={"40%"}
					left='-20%'
					width={"5%"}
					display={{ base: "none", md: "inline-block" }}
				/>
				<Image
					// border="2px solid red"
					src='/about us/s-2.png'
					alt='----'
					position={"absolute"}
					top={"75%"}
					left='-20%'
					width={"20%"}
					display={{ base: "none", md: "inline-block" }}
				/>
			</Box>
		</Box>
	);
};

export default LandingPosterAbout;
