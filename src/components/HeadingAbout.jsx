import { Box, Center, Image } from "@chakra-ui/react";

const HeadingAbout = () => {
  return (
    <Image
      w={{ base: "100%", md: "50%", lg: "100%" }}
      mt={{ base: "1rem", md: "3rem", lg: "8rem" }}
      mb={{ base: "1rem", md: "3rem", lg: "6rem" }}
      src="\about us\Group 33039.png"
      alt="heading"
    />
  );
};

export default HeadingAbout;
