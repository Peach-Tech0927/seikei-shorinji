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
import "./style.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return (
    <>
      <AppBar position="static" color="inherit" className="appBar">
        <Toolbar className="toolbar">
          <Box className="boxLogo">
            <Image
              src="/Shorinji（仮）.jpg"
              alt="logo"
              width={70}
              height={70}
              className="image"
            />
            <Typography className="typography">
              Seikei
              <br /> Shorinji
              <br /> Club
            </Typography>
          </Box>

          <Box className="navLinks">
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
            className="menuButton"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <Box display="flex" justifyContent="flex-end" p={2}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="close"
                  onClick={toggleDrawer(false)}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <List>
                <ListItem button component="a" href="/home">
                  <ListItemText primary="HOME" />
                </ListItem>
                <ListItem button component="a" href="/about">
                  <ListItemText primary="ABOUT" />
                </ListItem>
                <ListItem button component="a" href="/member">
                  <ListItemText primary="MEMBER" />
                </ListItem>
                <ListItem button component="a" href="/match">
                  <ListItemText primary="MATCH" />
                </ListItem>
                <ListItem button component="a" href="/sns">
                  <ListItemText primary="SNS" />
                </ListItem>
                <ListItem button component="a" href="/news">
                  <ListItemText primary="NEWS" />
                </ListItem>
                <ListItem button component="a" href="/schedule">
                  <ListItemText primary="SCHEDULE" />
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
