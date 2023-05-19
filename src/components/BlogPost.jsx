import { Box, Image, Text } from "@chakra-ui/react";
import CustomIcon from "../utils/CustomIcon";

const BlogPost = () => {
  return (
		<Box
			zIndex={100}
			m='8'
			justifyContent={"space-between"}
			display='flex'
			flexDirection={{ base: "column", md: "row" }}
			alignItems='center'
			p={15}>
			<Box
				ml={{ base: "0", md: "'70'", lg: "70" }}
				w={{ base: "100%", md: "50%", lg: "100%" }}>
				<Box letterSpacing={"1"} position={"relative"}>
					<Text
						w={{ base: "100%", md: "100%", lg: "100%" }}
						as='h1'
						fontFamily={"inter, sans-serif"}
						fontSize={{ base: "3xl", md: "'6xl'", lg: "7xl" }}
						fontWeight='700'
						color='root.black'
						textShadow={
							"-1px -1px 0 #e0e0e0, 1px -1px 0 #e0e0e0, -1px 1px 0 #e0e0e0, 1px 1px 0 #e0e0e0;"
						}>
						LATEST NEWS
					</Text>
					<Text
						fontSize={{ base: "xl", md: "'xl'", lg: "3xl" }}
						fontWeight='semibold'
						color='root.gray'>
						Blog Horizon
					</Text>
				</Box>
			</Box>
			<Box
				w={{ base: "100%", md: "100%", lg: "100%" }}
				// border='1px solid red'
				position={"relative"}>
				<CustomIcon
					isVertical={true}
					bg={"root.gray"}
					pos={"absolute"}
					top={"25%"}
					left={"82%"}
					spacing={"3rem"}
					w='50px'
					zIndex={5}
				/>

				<Box w={{ base: "100%", md: "100%", lg: "80%" }}
         position={"relative"}
        //  border="1px solid red"
        >
					<Image
						src='\blog\new.png'
						alt='----'
						position={"absolute"}
						top={{ base: "50%", md: "60%" }}
						left={{ base: "0", md: "35%" }}
						w='15%'
					/>

					<Image
						src='/blog/men.png'
						alt='----'
						w={{ base: "100%", md: "100%", lg: "50%" }}
						// display={{ base: "none", md: "block" }}
					/>
					<Box
						mt={5}
						border={"1px solid #E0E0E0"}
						w={{ base: "40%", md: "100%", lg: "50%" }}
						p={20}
						display={{ base: "none", md: "inline-block" }}
            ></Box>
				</Box>

				<Image
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					top={"52%"}
					left='-69%'
					width={"3%"}
					display={{ base: "inline-block", md: "inline-block" }}
				/>
				<Image
					src='/landing/vectorStar.png'
					alt='----'
					position={"absolute"}
					top={"55%"}
					left='-73%'
					width={"5%"}
					display={{ base: "inline-block", md: "inline-block" }}
				/>
			</Box>
		</Box>
  );
};

export default BlogPost;
