import { Circle, Flex, HStack, VStack } from "@chakra-ui/react";
import { FiInstagram } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
const CustomIcon = ({
	isVertical,
	bg,
	pos,
	top,
	left,
	spacing,
	w,
	iconSize,
}) => {
	const icons = [
		{
			icon: <FiInstagram size={18} />,
		},
		{
			icon: <BsYoutube size={18} />,
		},
		{
			icon: <FaFacebook size={18} />,
		},
		{
			icon: <SiTwitter size={18} />,
		},
	];
	return isVertical ? (
		<VStack
			zIndex={1000}
			spacing={{ base: "20px", md: spacing }}
			position={pos}
			top={top}
			left={left}>
			{icons.map((icon, index) => (
				<Circle
					key={index}
					size={{ base: "28px", md: w }}
					bg={bg}
					transition='all 0.2s'
					cursor='pointer'
					display='flex'
					boxShadow={"3px 3px 0 rgb(0, 0, 0)"}
					color='root.black'>
					{icon.icon}
				</Circle>
			))}
		</VStack>
	) : (
		<HStack spacing={{ base: "12px", md: "20px" }}>
			{icons.map((icon, index) => (
				<Circle
					key={index}
					size={{ base: "28px", md: "40px" }}
					bg='root.teal'
					transition='all 0.2s'
					cursor='pointer'
					display='flex'
					boxShadow={"3px 3px 0 rgb(0, 0, 0)"}
					color='root.black'>
					{icon.icon}
				</Circle>
			))}
		</HStack>
	);
};

export default CustomIcon;
