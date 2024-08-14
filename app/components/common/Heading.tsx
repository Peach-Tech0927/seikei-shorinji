import { Box, Typography } from "@mui/material";

type Tprops = {
  title: string;
};

const Heading: React.FC<Tprops> = ({ title }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"flex-start"}
      justifyContent={"center"}
      flexDirection={"column"}
      width={"100%"}
    >
      <Typography
        component="h3"
        fontSize={{ xs: 18, md: 25 }}
        pb={0.5}
        fontWeight={"bold"}
      >
        {title}
      </Typography>
      <Box width="100%" height={1.5} bgcolor="#00154b" />
    </Box>
  );
};

export default Heading;
