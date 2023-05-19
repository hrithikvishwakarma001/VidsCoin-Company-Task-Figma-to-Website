import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CustomBotton from "../utils/CustomBotton";

const LandingCreator = () => {
	return (
		<>
			<Image
				src='/landing/creator-tag.png'
				alt='----'
				w='100%'
				mt='10rem'
			/>
			<Box
				m='10'
				border={"1px solid #E0E0E0"}
				justifyContent={"space-between"}
				display='flex'
				flexDirection={{ base: "column", md: "row" }}
				alignItems='center'>
				<Box
					// border='1px solid blue'
					px='10'
					w={{ base: "100%", md: "30%", lg: "30%" }}
					position={"relative"}
					ml={{ base: "0", md: "'70'", lg: "70" }}>
					<Text
						fontSize={{ base: "2xl", md: "'4xl'", lg: "4xl" }}
						fontWeight='bold'
						color='root.gray'>
						CREATOR FUNDS <br /> ARE HERE
					</Text>
					<Text
						as='p'
						fontSize={{ base: "md", md: "'md'", lg: "lg" }}
						w={{ base: "100%", md: "100%", lg: "50%" }}
						color='root.gray'>
						We are creating a parallel fund to scale your content
						productions and business.
					</Text>
					<Image
						src='/landing/k-5.png'
						alt='----'
						position={"relative"}
						top={{ base: "5", md: "0", lg: "-2" }}
						w={{ base: "100%", md: "100%", lg: "70%" }}
					/>
					<Image
						src='/landing/vector-7.png'
						position={"absolute"}
						top='17%'
						right='-25%'
						zIndex={150}
						w={{ base: "100%", md: "100%", lg: "60%" }}
						display={{ base: "none", md: "block" }}
					/>
				</Box>
				<Box
					// border='1px solid green'
					position={"relative"}
					overflow={"hidden"}
					zIndex={100}
					w={{ base: "100%", md: "50%", lg: "60%" }}
					bg='root.gray'
					px={{ base: "5", md: "0", lg: "0" }}>
					<VStack spacing={0}>
						<Box
							h='150px'
							bg='root.gray'
							w='100%'
							display='flex'
							alignItems={"flex-end"}
							color={"root.black"}
							px={{ base: "2", md: "5", lg: "5" }}
							zIndex={2}
							overflow={"hidden"}
							position={"relative"}>
							<Text
								fontSize={{
									base: "lg",
									md: "2xl",
									lg: "3xl",
								}}
								mb={{ base: "2", md: "0", lg: "0" }}
								fontWeight='bold'>
								CREATORS WILL GET
							</Text>
							<Image
								src='/landing/k-4.png'
								alt='----'
								position={"absolute"}
								top={"10%"}
								left={"1%"}
								display={{ base: "none", md: "block" }}
							/>
							<Image
								src='/landing/vector-6.png'
								alt='----'
								position={"absolute"}
								top={"5%"}
								left={"30%"}
								zIndex={-1}
							/>
							<Image
								src='/landing/vector-8.png'
								alt='----'
								position={"absolute"}
								top={"15%"}
								left={"55%"}
								zIndex={-1}
								display={{ base: "none", md: "block" }}
							/>
							<Image
								src='/landing/vector-8.png'
								alt='----'
								position={"absolute"}
								top={"-60%"}
								right={"0%"}
								zIndex={-1}
								display={{ base: "none", md: "block" }}
							/>
						</Box>
						<Box
							h='150px'
							bg='#5F68CD'
							w='100%'
							px={{ base: "5", md: "5", lg: "5rem" }}
							display={"flex"}
							alignItems={"center"}>
							<Text
								as='ul'
								w={{ base: "100%", md: "50%", lg: "50%" }}>
								<Text
									as='li'
									fontSize={{
										base: "xs",
										md: "sm",
										lg: "lg",
									}}>
									Advance monetisation - Whatever monetisation
									is showing on your Facebook/ Youtube etc
									dashboard will be available for you to
									withdraw as realtime or advance.
								</Text>
							</Text>
						</Box>
						<Box
							h='150px'
							bg='#09B7AE'
							w='100%'
							px={{ base: "5", md: "5", lg: "5rem" }}
							display={"flex"}
							alignItems={"center"}>
							<Text
								as='ul'
								w={{ base: "100%", md: "50%", lg: "50%" }}>
								<Text
									as='li'
									fontSize={{
										base: "xs",
										md: "md",
										lg: "lg",
									}}>
									Advance monetisation - Whatever monetisation
									is showing on your Facebook/ Youtube etc
									dashboard will be available for you to
									withdraw as realtime or advance.
								</Text>
							</Text>
						</Box>
						<Box
							h='150px'
							bg='root.gray'
							w='100%'
							px={{ base: "4", md: "5", lg: "5rem" }}
							pt='1.5rem'
							// border={"1px solid red"}
							zIndex={2}
							position={"relative"}>
							<CustomBotton
								text='GET IN TOUCH'
								bgColor='#FF2AAC'
								shadowColor='black'
								textColor='root.white'
								size='lg'
								width='50'
							/>
							<Image
								src='/landing/vector-10.png'
								alt='----'
								position={"absolute"}
								zIndex={-1}
								display={{ base: "none", md: "block" }}
								// w={{ base: "50%" }}
								top={"0"}
								left={"60%"}
							/>
							<Image
								src='/landing/vector-8.png'
								alt='----'
								position={"absolute"}
								zIndex={-1}
								display={{ base: "block", md: "none" }}
								w={{ base: "50%" }}
								top={"6%"}
								left={"-10%"}
							/>
							<Image
								src='/landing/poster-2.png'
								alt='----'
								position={"absolute"}
								top={"-480"}
								right={"-1%"}
								zIndex={5}
								w={{ base: "70%", md: "50%", lg: "50%" }}
								display={{
									base: "none",
									md: "block",
									lg: "block",
								}}
							/>
						</Box>
					</VStack>
					<Image
						src='/landing/vector-4.png'
						position={"absolute"}
						top='17%'
						right='12%'
						w={"50px"}
						zIndex={5}
						display={{ base: "none", md: "block" }}
					/>
					<Image
						src='/landing/vector-4.png'
						position={"absolute"}
						top='17%'
						right='18%'
						w={"50px"}
						zIndex={5}
						display={{ base: "none", md: "block" }}
					/>
				</Box>
			</Box>
		</>
	);
};

export default LandingCreator;
