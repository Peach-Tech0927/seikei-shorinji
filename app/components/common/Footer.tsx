import { AppBar, Toolbar, Typography, Box, Grid } from "@mui/material";
import Image from "next/image";
import {
  FooterItemListA,
  FooterItemListB,
  FooterItemListC,
} from "@/app/data/FooterItemList";
import FooterColumn from "./FooterColumn";
import CustomLink from "./CustomLink";

const footerColumns = [
  { title: "AAAAAAA", items: FooterItemListA },
  { title: "BBBBBBBB", items: FooterItemListB },
  { title: "CCCCCCCCCCC", items: FooterItemListC },
];

const Footer = () => {
  return (
    <>
      <AppBar
        component={"footer"}
        position="static"
        color="inherit"
        sx={{
          backgroundColor: "#a20000",
        }}
      >
        <Box
          py={"10px"}
          textAlign={"center"}
          mb={"20px"}
          bgcolor={"#fff"}
          borderTop={"5px double #F58220"}
          borderBottom={"5px double #F58220"}
        >
          <Typography
            color="#AD002D"
            fontWeight={"bold"}
            fontSize={{ xs: "16px", md: "20px" }}
          >
            CONTENTS
          </Typography>
        </Box>

        <Toolbar
          sx={{
            flexDirection: "column",
            px: { xs: 1, sm: 2, md: 4 },
            py: 2,
            borderTop: "5px solid #17006E",
            borderBottom: "5px solid #17006E",
            backgroundColor: "#a20000",
          }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="flex-start"
            mb={{ xs: 1, md: 0 }}
          >
            <Box display="flex" alignItems="center" marginX={10}>
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
                px={{ xs: 1, sm: 2 }}
                py={1}
                fontWeight={"bold"}
              >
                Seikei
                <br /> Shorinji
                <br /> Club
              </Typography>
            </Box>

            <Grid container spacing={9}>
              {footerColumns.map((column, index) => (
                <Grid item xs={6} sm={4} key={index}>
                  <FooterColumn title={column.title} />
                  {column.items.map((item) => (
                    <Box key={item.href} mb={1}>
                      <CustomLink href={item.href}>{item.title}</CustomLink>
                    </Box>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
