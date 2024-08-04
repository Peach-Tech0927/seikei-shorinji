"use client";
import {
  AppBar,
  Toolbar,
  Typography,
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
        height: isMobile ? 70 : 85,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: isMobile ? "row" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          textAlign: isMobile ? "center" : "left",
          overflow: "hidden",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          py={isMobile ? 2 : 0}
          justifyContent={isMobile ? "center" : "flex-start"}
        >
          <Image
            src="/Shorinji（仮）.jpg"
            alt="logo"
            width={70}
            height={70}
            style={{
              marginTop: isMobile ? 10 : 0,
              marginBottom: isMobile ? 10 : 0,
            }}
          />
          <Typography
            color="white"
            fontSize={isMobile ? 12 : 17}
            lineHeight={1}
            display={isMobile ? "block" : "block"}
            textAlign="center"
          >
            Seikei
            <br /> Shorinji
            <br /> Club
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "row" : "row",
            alignItems: "center",
            gap: isMobile ? 1 : 2,
            overflowX: isMobile ? "auto" : "hidden",
            overflowY: "hidden",
            whiteSpace: "nowrap",
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
