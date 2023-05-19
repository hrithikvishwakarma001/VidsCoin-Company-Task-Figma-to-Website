import { Box, HStack, Image, Text } from "@chakra-ui/react";
import CustomBotton from "../utils/CustomBotton";
import CustomIcon from "../utils/CustomIcon";

const LandingPoster = () => {
	return (
		<Box
			m='8'
			border={"1px solid #E0E0E0"}
			backgroundImage={"url(/landing/grid.png)"}
			backgroundRepeat={"no-repeat"}
			backgroundPosition={"center"}
			backgroundSize={"cover"}
			backgroundBlendMode={"screen"}
			justifyContent={"space-between"}
			display='flex'
			flexDirection={{ base: "column", md: "row" }}
			alignItems='center'
			px={5}
		>
			<Box
				ml={{ base: "0", md: "'70'", lg: "70" }}
				w={{ base: "100%", md: "50%", lg: "50%" }}>
				<Box
					lineHeight={"1.2"}
					letterSpacing={"1"}
					position={"relative"}>
					<Image
						src='/landing/eye.png'
						alt='----'
						position={"absolute"}
						top={"18%"}
						left={"-5%"}
						w='8%'
					/>
					<Image
						src='/landing/eye.png'
						alt='----'
						position={"absolute"}
						top={"64%"}
						left={"34%"}
						w='8%'
					/>
					<Text
						fontSize={{ base: "2xl", md: "'4xl'", lg: "6xl" }}
						fontWeight='bold'
						color='root.gray'>
						GET CRYPTO
					</Text>
					<Text
						as='h1'
						fontFamily={"inter, sans-serif"}
						fontSize={{ base: "3xl", md: "'6xl'", lg: "7xl" }}
						fontWeight='700'
						color='root.black'
						textShadow={
							"-1px -1px 0 #e0e0e0, 1px -1px 0 #e0e0e0, -1px 1px 0 #e0e0e0, 1px 1px 0 #e0e0e0;"
						}>
						rewards
					</Text>
					<Text
						fontSize={{ base: "2xl", md: "'4xl'", lg: "6xl" }}
						fontWeight='bold'
						color='root.gray'>
						AND SOCIAL MEDIA
					</Text>
					<Text
						as='h1'
						fontFamily={"inter, sans-serif"}
						fontSize={{ base: "3xl", md: "'7xl'", lg: "7xl" }}
						fontWeight='700'
						color='root.black'
						textShadow={
							"-1px -1px 0 #e0e0e0, 1px -1px 0 #e0e0e0, -1px 1px 0 #e0e0e0, 1px 1px 0 #e0e0e0;"
						}>
						revenue
					</Text>
					<Text
						fontSize={{ base: "2xl", md: "'4xl'", lg: "6xl" }}
						fontWeight='800'
						color='root.gray'>
						IN ADVANCE/REALTIME
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
						text="I'm an agency"
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

				<Box zIndex={2} position={"relative"}
				
				>
					<Image
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
					/>
					<Image src='/landing/poster.png' alt='----' 
					/>
					<HStack
						position={"absolute"}
						top={"45%"}
						left='25%'
						width={{ base: "15%", md: "50%", lg: "70%" }}
						align={"center"}
						// border={"1px solid red"}
						spacing={"0"}>
						<Image src='/landing/k-6.png' alt='----' zIndex={-1} />
						{[...Array(3)].map((_, i) => (
							<Image
								key={i}
								src='/landing/k-1.png'
								alt='----'
								zIndex={-1}
								position={"relative"}
								top={"-15px"}
							/>
						))}
						<Image src='/landing/k-2.png' alt='----' zIndex={-1} />
					</HStack>
					<Image
						src='/landing/k-2.png'
						alt='----'
						zIndex={-1}
						position={"absolute"}
						top={"35%"}
						left='-15%'
						w='13%'
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
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					top={"18%"}
					left='55%'
					width={"10%"}
					display={{ base: "none", md: "inline-block" }}
				/>
				<Image
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					top={"60%"}
					left='15%'
					width={"10%"}
					display={{ base: "none", md: "inline-block" }}
				/>
				<Image
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					top={"70%"}
					left='75%'
					width={"10%"}
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
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					top={"86%"}
					left='-20%'
					width={"5%"}
					display={{ base: "none", md: "inline-block" }}
				/>
			</Box>
		</Box>
	);
};

export default LandingPoster;
