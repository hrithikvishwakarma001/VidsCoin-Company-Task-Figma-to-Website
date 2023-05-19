import { Button } from "@chakra-ui/react";
const CustomBotton = ({ text, bgColor, shadowColor, textColor,size,width }) => {
	return (
		<Button
			size={size}
			w={width}
			fontSize={{ base: "sm", md: "lg" }}
			fontWeight={500}
			px={10}
			bg={bgColor}
			color={textColor}
			border={"1px solid black"}
			rounded={false}
			boxShadow={`4px 4px 0px ${shadowColor}`}
			_hover={{
				bg: bgColor,
				boxShadow: `4px 4px 0px ${shadowColor}`,
				transform: "translateY(-2px)",
					
			}}
			>
			{text}
		</Button>
	);
};

export default CustomBotton;
