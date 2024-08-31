"use client";
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Grid } from "@mui/material";

import Image from "next/image";
import CustomLink from "./CustomLink";
import {
  FooterItemListA,
  FooterItemListB,
  FooterItemListC,
} from "@/app/data/FooterItemList";

const Footer = () => {
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
          py: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          py={"10px"}
          textAlign={"center"}
          mb={"20px"}
          position="relative"
          sx={{
            backgroundColor: "#fff",
            borderTop: "5px double #F58220",
            borderBottom: "5px double #F58220",
          }}
        >
          <Typography
            variant="h6"
            color="#AD002D"
            sx={{ fontWeight: "bold", fontSize: { xs: "16px", md: "20px" } }}
          >
            CONTENTS
          </Typography>
        </Box>

        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            px: { xs: 1, sm: 2, md: 4 },
            py: 2,
            borderTop: "5px solid #17006E",
            borderBottom: "5px solid #17006E",
            backgroundColor: "#a20000",
          }}
        >
          <Grid container spacing={5} sx={{ mb: { xs: 1, md: 0 } }}>
            <Grid
              item
              xs={12}
              md={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src="/Shorinji（仮）.jpg"
                alt="logo"
                width={100}
                height={100}
              />

              <Typography
                color="white"
                fontSize={{ xs: "14px", md: "18px" }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ textAlign: "center", px: { xs: 1, sm: 2 }, py: 1 }}
              >
                Seikei
                <br /> Shorinji
                <br /> Club
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                <Grid item xs={6} sm={4}>
                  <Box color="white">
                    <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                      AAAAAAA
                    </Typography>
                    {FooterItemListA.map((Item) => (
                      <Box key={Item.href} sx={{ mb: 1 }}>
                        <CustomLink href={Item.href}>{Item.title}</CustomLink>
                      </Box>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={6} sm={4}>
                  <Box color="white">
                    <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                      BBBBBBBB
                    </Typography>
                    {FooterItemListB.map((Item) => (
                      <Box key={Item.href} sx={{ mb: 1 }}>
                        <CustomLink href={Item.href}>{Item.title}</CustomLink>
                      </Box>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Box color="white">
                    <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                      CCCCCCCCCCC
                    </Typography>
                    {FooterItemListC.map((Item) => (
                      <Box key={Item.href} sx={{ mb: 1 }}>
                        <CustomLink href={Item.href}>{Item.title}</CustomLink>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
