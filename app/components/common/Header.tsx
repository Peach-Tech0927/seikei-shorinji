"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import CustomLink from "./CustomLink";
import NavItem from "./NavItem";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        color="inherit"
        sx={{
          backgroundColor: "#a20000",
          height: { xs: "70px", md: "85px" },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={{ xs: "10px", md: "16px" }}
            paddingTop={{ xs: "5px", md: "0" }}
            paddingBottom={{ xs: "5px", md: "0" }}
            flex={{ xs: "0", md: "1" }}
          >
            <Image
              src="/Shorinji（仮）.jpg"
              alt="logo"
              width={70}
              height={70}
              style={{ margin: 0 }}
            />
            <Typography
              color={"white"}
              fontSize={{ xs: "12px", md: "17px" }}
              lineHeight={1}
              textAlign={"left"}
            >
              Seikei
              <br /> Shorinji
              <br /> Club
            </Typography>
          </Box>

          <Box
            display={{ xs: "none", md: "flex" }}
            flexDirection={"row"}
            alignItems={"center"}
            overflow={"hidden"}
          >
            <CustomLink href="/home">HOME</CustomLink>
            <CustomLink href="/about">ABOUT</CustomLink>
            <CustomLink href="/member">MEMBER</CustomLink>
            <CustomLink href="/match">MATCH</CustomLink>
            <CustomLink href="/sns">SNS</CustomLink>
            <CustomLink href="/news">NEWS</CustomLink>
            <CustomLink href="/schedule">SCHEDULE</CustomLink>
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "white",
            }}
          >
            <MenuIcon sx={{ color: "white" }} />{" "}
          </IconButton>

          <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <Box
              width={250}
              height={"100vh"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              padding={0}
              margin={0}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <Box display={"flex"} justifyContent={"flex-end"} padding={2}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="close"
                  onClick={toggleDrawer(false)}
                  sx={{ color: "white" }}
                >
                  <CloseIcon sx={{ color: "white" }} />
                </IconButton>
              </Box>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  padding: 0,
                  margin: 0,
                }}
              >
                <NavItem href="/home" label="HOME" />
                <NavItem href="/about" label="ABOUT" />
                <NavItem href="/member" label="MEMBER" />
                <NavItem href="/match" label="MATCH" />
                <NavItem href="/sns" label="SNS" />
                <NavItem href="/news" label="NEWS" />
                <NavItem href="/schedule" label="SCHEDULE" />
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
