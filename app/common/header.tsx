import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomLink from "./CustomLink";

const Header = () => {
  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{ bgcolor: "#a20000", height: 85 }}
    >
      <Toolbar>
        <Box flexGrow={1} display="flex" alignItems="center" gap={2} py={2}>
          <Image src="/Shorinji（仮）.jpg" alt="logo" width={70} height={70} />
          <Typography color="white" fontSize={17} lineHeight={1}>
            Seikei
            <br /> Shorinji
            <br /> Club
          </Typography>
        </Box>
        <Box>
          <CustomLink href="/home">HOME</CustomLink>
          <CustomLink href="/about">ABOUT</CustomLink>
          <CustomLink href="/member">MEMBER</CustomLink>
          <CustomLink href="/match">MATCH</CustomLink>
          <CustomLink href="/sns">SNS</CustomLink>
          <CustomLink href="/news">NEWS</CustomLink>
          <CustomLink href="/schedule">SCHEDULE</CustomLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
