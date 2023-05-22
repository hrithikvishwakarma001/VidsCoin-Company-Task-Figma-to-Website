import {
	Box,
	Center,
	Flex,
	Grid,
	GridItem,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import React from "react";

const LandingCards = () => {
	return (
		<Box px='10' py='10rem' bg='root.gray' color={"root.black"} pb='20'>
			<VStack
				// border={"1px solid red"}
				width={{ base: "100%", md: "100%", lg: "80%" }}
				mx='auto'>
				<Box>
					<Text
						fontSize={{ base: "xl", md: "'4xl'", lg: "5xl" }}
						fontWeight='bold'
						mb='1'>
						HOW IT WORKS
					</Text>
					<Text
						justifyItems
						w={{ base: "100%", md: "100%", lg: "80%" }}
						textAlign='justify'
						fontSize={{ base: "sm", md: "'2xl'", lg: "2xl" }}>
						If your are a regular content creator, generating
						revenues and have to wait for 30-40 days to get social
						media monetisation, then we are here to pay you in
						advance/realtime. You will also get crypto token rewards
						on top.
					</Text>
				</Box>
				<Grid
					w='100%'
					templateColumns={{
						base: "repeat(1, 1fr)",
						md: "repeat(2, 1fr)",
						lg: "repeat(3, 1fr)",
					}}
					gap={{ base: "3rem", md: "2rem", lg: "1rem" }}>
					<GridItem w={{ base: "100%", md: "80%", lg: "340px" }}>
						<Flex
							zIndex={100}
							border={"1px solid green"}
							position={"relative"}
							flexDirection='column'
							bg='#FF2AAC'
							h={{ base: "350px", md: "380px" }}
							boxShadow={`7px 7px 0px black`}>
							<Flex w='100%' justifyContent={"flex-start"}>
								<Image src='/landing/vector-4.png' />
							</Flex>
							<Center>
								<Text
									fontSize={{
										base: "xl",
										md: "'2xl'",
										lg: "3xl",
									}}
									mt='5rem'
									fontWeight='bold'
									color='root.white'
									textAlign='center'>
									Pair your <br /> channel or page
								</Text>
							</Center>

							<Flex justifyContent={"flex-end"} w='100%'>
								<Image
									src='/landing/calculator.png'
									w='40%'
									position={"absolute"}
									bottom={"-5%"}
								/>
								<Image
									src='/landing/vector-4.png'
									position={"absolute"}
									bottom={"10%"}
									right={"12%"}
									zIndex={-1}
									display={{ base: "block", md: "none" }}
								/>
							</Flex>
						</Flex>
					</GridItem>
					<GridItem w={{ base: "100%", md: "80%", lg: "340px" }}>
						<Flex
							// border={"1px solid red"}
							position={"relative"}
							flexDirection='column'
							bg='#6564CA'
							h={{ base: "350px", md: "380px" }}
							boxShadow={`7px 7px 0px black`}>
							<Flex w='100%' justifyContent={"flex-end"}>
								<Image src='/landing/pills-1.png' />
							</Flex>
							<Center>
								<Text
									fontSize={{
										base: "xl",
										md: "'2xl'",
										lg: "3xl",
									}}
									mt='2rem'
									fontWeight='bold'
									color='root.white'
									textAlign='center'>
									Put your <br /> contact details
								</Text>
							</Center>

							<Flex
								justifyContent={"center"}
								w='100%'
								position='relative'
								zIndex='2'>
								<Image
									src='/landing/cash.png'
									w='50%'
									position={"absolute"}
									top='10'
								/>
								<Image
									src='/landing/pills-2.png'
									w='60%'
									zIndex={-1}
									position={"absolute"}
									top='5'
								/>
							</Flex>
						</Flex>
					</GridItem>
					<GridItem w={{ base: "100%", md: "80%", lg: "340px" }}>
						<Flex
							// border={"1px solid red"}
							position={"relative"}
							flexDirection='column'
							bg='#09B7AE'
							h={{ base: "350px", md: "380px" }}
							boxShadow={`7px 7px 0px black`}>
							<Image
								src='/landing/pakad.png'
								position='absolute'
								top='60'
								left='10'
								zIndex={2}
							/>
							<Flex w='100%' justifyContent={"flex-start"}>
								<Image src='/landing/vector-2.png' />
							</Flex>
							<Center>
								<Text
									fontSize={{
										base: "xl",
										md: "'2xl'",
										lg: "3xl",
									}}
									mt='5rem'
									fontWeight='bold'
									color='root.white'
									textAlign='center'>
									Get access to <br /> advance funds
								</Text>
							</Center>

							<Flex justifyContent={"center"} w='100%'>
								<Image
									src='/landing/vector-50.png'
									w='70%'
									position={"absolute"}
									bottom={"-15%"}
									filter={'contrast(0.7)'}
								/>
							</Flex>
						</Flex>
					</GridItem>
				</Grid>
			</VStack>
		</Box>
	);
};

export default LandingCards;
