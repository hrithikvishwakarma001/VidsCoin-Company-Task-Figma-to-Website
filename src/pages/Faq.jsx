import {
	Box,
	Flex,
	FormControl,
	Image,
	Input,
	Text,
	Textarea,
} from "@chakra-ui/react";
import React from "react";
import CustomBotton from "../utils/CustomBotton";

const Faq = () => {
	const array = [
		{
			question: "What is NFT?",
			answer: "NFT stands for Non-Fungible Token. It is a unique digital asset that is stored on a blockchain. It is a digital certificate of ownership for any virtual or physical asset. It is a unique digital asset that is stored on a blockchain. It is a digital certificate of ownership for any virtual or physical asset.",
		},
		{
			question: "What is NFT?",
			answer: "NFT stands for Non-Fungible Token. It is a unique digital asset that is stored on a blockchain. It is a digital certificate of ownership for any virtual or physical asset. It is a unique digital asset that is stored on a blockchain. It is a digital certificate of ownership for any virtual or physical asset.",
		},
		{
			question: "What is NFT?",
			answer: "NFT stands for Non-Fungible Token. It is a unique digital asset that is stored on a blockchain. It is a digital certificate of ownership for any virtual or physical asset. It is a unique digital asset that is stored on a blockchain. It is a digital certificate of ownership for any virtual or physical asset.",
		},
		{
			question: "What is NFT?",
			answer: "NFT stands for Non-Fungible Token. It is a unique digital asset that is stored on a blockchain. It is a digital certificate of ownership for any virtual or physical asset. It is a unique digital asset that is stored on a blockchain. It is a digital certificate of ownership for any virtual or physical asset.",
		},
	];

	return (
		<Box mb='5rem'>
			<Box
				style={{
					cursor: "pointer",
				}}
				w={"90%"}
				m={"auto"}
				borderBottom={{
					base: "1px solid #E0E0E0",
					md: "none",
				}}>
				<Image
					src='\about us\faq.png'
					w={{ base: "70%", md: "70%", lg: "20%" }}
				/>
			</Box>
			<Flex
				w={"90%"}
				m={"auto"}
				justifyContent={"space-evenly"}
				flexDirection={{ base: "column", lg: "row" }}>
				{/* qusetion an answer */}
				<Box mb={"4rem"} mt='3rem'>
					{array.map(({ question, answer }, index) => {
						return (
							<React.Fragment key={index}>
								<Flex
									gap={10}
									w={{ base: "95%", md: "80%", lg: "80%" }}
									style={{
										position: "relative",
										top: "5%",
										left: "2%",
									}}>
									<Text
										color={{
											base: "rgba(191, 191, 241, 0.72)",
											md: "rgb(148, 148, 148)",
										}}
										style={{
											fontFamily: "Archivo",
											fontStyle: "normal",
											fontWeight: "500",
											lineHeight: "103.52%",
											marginBottom: "20px",
										}}
										fontSize={{ base: "16px", lg: "20px" }}>
										QUESTION
									</Text>
									<Text
										fontSize={{ base: "14px", lg: "18px" }}
										textAlign='justify'
										style={{
											fontFamily: "Archivo",
											fontStyle: "normal",
											fontWeight: "400",
											lineHeight: "103.52%",
											color: "rgb(148, 148, 148)",
											marginBottom: "20px",
										}}>
										{question}
									</Text>
								</Flex>
								<Flex
									gap={14}
									w={{ base: "95%", md: "80%", lg: "80%" }}
									style={{
										position: "relative",
										top: "5%",
										left: "2%",
									}}>
									<Text
										color={{
											base: "rgba(191, 191, 241, 0.72)",
											md: "rgb(148, 148, 148)",
										}}
										fontSize={{ base: "16px", lg: "20px" }}
										style={{
											fontFamily: "Archivo",
											fontStyle: "normal",
											fontWeight: "500",
											lineHeight: "103.52%",
											marginBottom: "20px",
										}}>
										ANSWER
									</Text>
									<Text
										fontSize={{ base: "14px", lg: "18px" }}
										textAlign='justify'
										fontFamily='Archivo'
										fontStyle='normal'
										fontWeight='400'
										lineHeight='103.52%'
										color='rgb(148, 148, 148)'
										marginBottom='20px'>
										{answer}
									</Text>
								</Flex>
							</React.Fragment>
						);
					})}
				</Box>
				{/* input box */}
				<Box
					w={"100%"}
					mt={"4%"}
					style={{
						position: "relative",
						top: "5%",
					}}
					textAlign='left'>
					<Text
						style={{
							fontFamily: "Archivo",
							fontStyle: "normal",
							fontWeight: "700",
							fontSize: "32px",
							lineHeight: "103.52%",
							color: "#E0E0E0",
							marginBottom: "20px",
						}}>
						HAVE QUESTIONS STILL?
					</Text>

					<form>
						<FormControl>
							<Flex gap={4}>
								<Input
									type='email'
									required
									mb={4}
									borderRadius={"0px"}
									placeholder='Your Name or Brand'
									bgColor={"rgb(224, 224, 224)"}
									color='root.black'
								/>
								<Input
									type='email'
									required
									mb={4}
									borderRadius={"0px"}
									placeholder='Your Contact E-mail'
									bgColor={"rgb(224, 224, 224)"}
									color='root.black'
								/>
							</Flex>
						</FormControl>

						<FormControl>
							<Textarea
								rows={4}
								mb={4}
								borderRadius={"0px"}
								placeholder='Your Query.....'
								bgColor={"rgb(224, 224, 224)"}
								color='root.black'
							/>
						</FormControl>

						<CustomBotton
							text='Send a Question'
							bgColor='root.teal'
							shadowColor='#E0E0E0'
							textColor='root.white'
							size='lg'
							width='43%'
						/>
					</form>
				</Box>
			</Flex>
		</Box>
	);
};

export default Faq;
