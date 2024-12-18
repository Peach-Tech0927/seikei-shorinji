import React from "react";
import { Container, Grid, Typography, Box, Paper } from "@mui/material";
import Image from "next/image";
import { members } from "./memberlist";

const Page = () => {
  return (
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
  );
};

export default Page;
