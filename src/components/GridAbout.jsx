import { Grid } from "@chakra-ui/react";

const GridAbout = () => {
  return (
    <Grid
      w={"80%"}
      m={"auto"}
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(1, 1fr)",
        lg: "repeat(1, 1fr)",
      }}>
      <img src="\about us\Group 27.png" alt="----" />
    </Grid>
  );
};

export default GridAbout;
