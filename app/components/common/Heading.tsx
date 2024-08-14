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
    >
      <Typography
        component="h3"
        fontSize={{ xs: 18, md: 30 }}
        pb={0.5}
        fontWeight={"bold"}
      >
        {title}
      </Typography>
      <Box
        width={{
          xs: 450,
          md: 520,
        }}
        height={3}
        bgcolor="#00154b"
        borderRadius={0.5}
      />
    </Box>
  );
};

export default Heading;
