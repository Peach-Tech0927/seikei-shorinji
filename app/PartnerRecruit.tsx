import { Box, Typography } from "@mui/material";

const PartnerRecruit = () => {
  return (
    <Box
      bgcolor={"#a20100"}
      width={"100%"}
      height={250}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Typography color={"white"} fontSize={20} fontWeight={"bold"}>
        パートナー募集
      </Typography>
      <Typography color={"white"} fontSize={12} fontWeight={"bold"}>
        PARTNER
      </Typography>
    </Box>
  );
};

export default PartnerRecruit;
