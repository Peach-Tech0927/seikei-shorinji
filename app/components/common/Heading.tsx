import { Box, Typography } from "@mui/material";

type Tprops = {
  title: string;
};

const Heading: React.FC<Tprops> = ({ title }) => {
  return (
    <Box display={"flex"} alignItems={"flex-start"} flexDirection={"column"}>
      <Typography fontSize={{ xs: 18, md: 25 }} pb={0.5} fontWeight={"bold"}>
        {title}
      </Typography>
      <Box width="100%" height={1.2} bgcolor="#00154b" />
    </Box>
  );
};

export default Heading;
