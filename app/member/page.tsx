import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  AppBar,
  Link,
} from "@mui/material";
import Image from "next/image";
import { members } from "./memberlist";

const Page = () => {
  return (
    <>
      <AppBar position="sticky" sx={{ boxShadow: 0, bgcolor: "transparent" }}>
        <Box
          sx={{
            backgroundImage:
              'url("https://kyoto-kogakkan.mkg.ac.jp/wp-content/uploads/2014/09/5c0aee36de64f0c81223a7b47a0b5016.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "250px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "8px",

            mb: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px 2px rgba(0, 0, 0, 0.7)",
              margin: 0,
            }}
          >
            部員紹介
          </Typography>
        </Box>
      </AppBar>

      <Container
        sx={{ fontFamily: "Arial, sans-serif", bgcolor: "white", px: 4 }}
      >
        <Box>
          <Box
            sx={{
              mb: 4,
              fontSize: "1.2rem",
              color: "#555",
            }}
          >
            <Typography component="h4" sx={{ color: "#555" }}>
              <Link href="/">
                <Typography
                  component="span"
                  sx={{
                    color: "#555",
                  }}
                >
                  HOME
                </Typography>
              </Link>
              {" > "}
              <Typography
                component="span"
                sx={{
                  color: "#555",
                }}
              >
                MEMBER
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container>
        <Grid container spacing={4}>
          {members.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  padding: "20px",
                  marginBottom: "20px",
                  textAlign: "center",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginBottom: "15px",
                    display: "inline-block",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.alt}
                    width={120}
                    height={120}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box sx={{ padding: "10px" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    {member.name}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Page;
