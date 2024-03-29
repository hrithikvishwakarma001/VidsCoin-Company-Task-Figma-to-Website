import { Box, HStack, Image, Text } from "@chakra-ui/react";
import CustomBotton from "../utils/CustomBotton";
import CustomIcon from "../utils/CustomIcon";

const CreatorPoster = () => {
	return (
		<Box
			overflow={"hidden"}
			m='10'
			border={"1px solid #E0E0E0"}
			justifyContent={"space-between"}
			display='flex'
			flexDirection={{ base: "column", md: "row" }}
			alignItems='center'
			px={5}>
			<Box
				ml={{ base: "0", md: "'70'", lg: "70" }}
				w={{ base: "100%", md: "50%", lg: "50%" }}>
				<Box
					lineHeight={"1.2"}
					letterSpacing={"1"}
					position={"relative"}>
					{/* <Image
						src='/landing/eye.png'
						alt='----'
						position={"absolute"}
						top={"18%"}
						left={"-5%"}
						w='2%'
					/>
					<Image
						src='/landing/eye.png'
						alt='----'
						position={"absolute"}
						top={"64%"}
						left={"34%"}
						w='2%'
					/> */}
					<Text
						as='h1'
						mt='10'
						fontFamily={"inter, sans-serif"}
						fontSize={{ base: "3xl", md: "'6xl'", lg: "8xl" }}
						fontWeight='700'
						color='root.black'
						textShadow={
							"-1px -1px 0 #9796F3, 1px -1px 0 #9796F3, -1px 1px 0 #9796F3, 1px 1px 0 #9796F3;"
						}>
						CREATE
					</Text>
					<Text
						fontSize={{ base: "2xl", md: "'4xl'", lg: "6xl" }}
						fontWeight='800'
						color='root.gray'>
						to bring change
					</Text>
				</Box>
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
						size='lg'
						width='48%'
					/>
					<CustomBotton
						text='Funding'
						bgColor='root.teal'
						shadowColor='#E0E0E0'
						textColor='root.white'
						size='lg'
						width='48%'
					/>
				</Box>
			</Box>
			<Box
				// border='1px solid red'
				position={"relative"}>
				<CustomIcon
					isVertical={true}
					bg={"root.gray"}
					pos={"absolute"}
					top={"52%"}
					left={"82%"}
					spacing={"3rem"}
					w='50px'
					zIndex={5}
				/>

				<Box zIndex={2} position={"relative"}>
					{/* <Image
						src='/landing/eye.png'
						alt='----'
						position={"absolute"}
						top={"33%"}
						left={"43%"}
						w='10%'
					/>
					<Image
						src='/landing/eye.png'
						alt='----'
						position={"absolute"}
						top={"35%"}
						left={"36%"}
						w='10%'
					/> */}
					<Image
						src='/creators/1.png'
						alt='----'
						w={{ base: "100%", md: "100%", lg: "50%" }}
						mt='10'
						ml='30%'
					/>
					<Image
						src='/creators/k-1.png'
						alt='----'
						zIndex={-1}
						position={"absolute"}
						top={"20%"}
						left='-10%'
						w='50%'
						display={{ base: "inline-block", md: "none" }}
					/>
					<Image
						src='/creators/k-2.png'
						alt='----'
						zIndex={-1}
						position={"absolute"}
						top={"45%"}
						left='-50%'
						w='20%'
					/>
					<HStack
						position={"absolute"}
						top={"70%"}
						left='15%'
						width={{ base: "40%", md: "40%", lg: "40%" }}
						align={"center"}
						// border={"1px solid red"}
						spacing={"0"}>
						<Image src='/creators/k-2.png' alt='----' zIndex={-1} />
						<Image src='/creators/k-2.png' alt='----' zIndex={-1} />
					</HStack>
					<Image
						src='/creators/k-1.png'
						alt='----'
						zIndex={-3}
						position={"absolute"}
						top={"35%"}
						left={"75%"}
						w='25%'
					/>
				</Box>
				<Image
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					top={"10%"}
					left='-5%'
					width={"5%"}
					zIndex={2}
					display={{ base: "none", md: "inline-block" }}
				/>
				<Image
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					top={"10%"}
					left='-5%'
					width={"20%"}
					zIndex={2}
					display={{ base: "inline-block", md: "none" }}
				/>

				<Image
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					top={"10%"}
					left='-2%'
					width={"5%"}
					zIndex={2}
					display={{ base: "inline-block", md: "none" }}
				/>
				<Image
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					top={"9%"}
					left='-1%'
					width={"3%"}
					zIndex={2}
					display={{ base: "none", md: "inline-block" }}
				/>

				<Image
					src='/creators/vector-12.png'
					alt='----'
					position={"absolute"}
					top={{ base: "19%", md: "14%" }}
					left={{ base: "65%", md: "47%" }}
					width={{ base: "15%", md: "8%" }}
					// display={{ base: "none", md: "inline-block" }}
					zIndex={2}
				/>
				<Image
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					top={"15%"}
					right='5%'
					width={"12%"}
					display={{ base: "inline-block", md: "none" }}
					zIndex={2}
				/>
				<Image
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					top={"10%"}
					right='2%'
					width={"8%"}
					display={{ base: "inline-block", md: "none" }}
					zIndex={2}
				/>
				<Image
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					top={"30%"}
					left='36%'
					width={"5%"}
					display={{ base: "none", md: "inline-block" }}
					zIndex={2}
				/>
				<Image
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					top={"15%"}
					right='25%'
					width={"5%"}
					display={{ base: "none", md: "inline-block" }}
					zIndex={2}
				/>
				<Image
					src='/creators/strip-2.png'
					alt='----'
					position={"absolute"}
					top={"-15%"}
					left='-70%'
					width={"80%"}
					display={{ base: "none", md: "inline-block" }}
					zIndex={2}
				/>
				<Image
					src='/creators/strip-1.png'
					alt='----'
					position={"absolute"}
					top={"-10%"}
					right='-10%'
					width={"80%"}
					display={{ base: "none", md: "inline-block" }}
				/>
				<Image
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					top={"40%"}
					left='-45%'
					width={"3%"}
					display={{ base: "none", md: "inline-block" }}
				/>
			</Box>
		</Box>
	);
};

export default CreatorPoster;
