import { Box, Typography } from "@mui/material";

const PartnerRecruit = () => {
  return (
    <Box
      bgcolor={"#a20100"}
      height={{ xs: 120, md: 250 }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Typography
        color={"white"}
        fontSize={{ xs: 13, md: 20 }}
        fontWeight={"bold"}
      >
        パートナー募集
      </Typography>
      <Typography
        color={"white"}
        fontSize={{ xs: 10, md: 16 }}
        fontWeight={"bold"}
      >
        PARTNER
      </Typography>
    </Box>
  );
};

export default PartnerRecruit;
