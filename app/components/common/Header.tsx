"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomLink from "./CustomLink";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{
        bgcolor: "#a20000",
        height: 85,
        [theme.breakpoints.down("sm")]: { height: 70 },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <Box
          flexGrow={1}
          display="flex"
          alignItems="center"
          gap={2}
          py={isMobile ? 2 : 0}
          justifyContent={isMobile ? "center" : "flex-start"}
        >
          <Image src="/Shorinji（仮）.jpg" alt="logo" width={70} height={70} />
          {!isMobile && (
            <Typography color="white" fontSize={17} lineHeight={1}>
              Seikei
              <br /> Shorinji
              <br /> Club
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: isMobile ? 1 : 2,
          }}
        >
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
