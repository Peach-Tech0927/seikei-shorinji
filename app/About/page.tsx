"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AppBar, Box, Grid, Typography, Container, Paper } from "@mui/material";

const Page: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const environmentImages = [
    "/1536-960.png",
    "/1536-960.png",
    "/1536-960.png",
    "/1536-960.png",
    "/1536-960.png",
    "/1536-960.png",
  ];

  const loadMap = () => {
    const { google } = window;
    if (google && mapRef.current) {
      new google.maps.Map(mapRef.current, {
        center: { lat: 35.42, lng: 139.34 },
        zoom: 16,
      });
    }
  };

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCAqztwgSizRm6u9AH5Gd-WUdgJOvXi6sI`;
      script.async = true;
      script.onload = loadMap;
      document.head.appendChild(script);
    } else {
      loadMap();
    }
  }, []);

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
            部活紹介
          </Typography>
        </Box>
      </AppBar>

      <Container
        sx={{ fontFamily: "Arial, sans-serif", bgcolor: "#f9f9f9", px: 4 }}
      >
        <Box>
          <Box
            sx={{
              mb: 4,
              fontSize: "1.2rem",
              color: "#555",
              textTransform: "uppercase",
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
                ABOUT
              </Typography>
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                color: "#000066",
                borderBottom: "2px solid #000066",
                pb: 1,
                mb: 2,
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              少林寺拳法とは
            </Typography>
            <Typography
              sx={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}
            >
              少林寺拳法について書く
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                color: "#000066",
                borderBottom: "2px solid #000066",
                pb: 1,
                mb: 2,
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              活動日
            </Typography>
            <Typography
              sx={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}
            >
              月・木・土
              <br />
              17:00 ～ 20:00
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                color: "#000066",
                borderBottom: "2px solid #000066",
                pb: 1,
                mb: 2,
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              活動内容
            </Typography>
            <Box
              sx={{
                pt: 2,
                listStyleType: "disc",
                fontSize: "1.2rem",
                color: "#555",
              }}
            >
              内容
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                color: "#000066",
                borderBottom: "2px solid #000066",
                pb: 1,
                mb: 2,
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              かかる費用
            </Typography>
            <Typography
              sx={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}
            >
              💰 部費　 : 1,000円
              <br /> 💰 連盟費 : 3,500円
              <br /> 💰 道着費 :
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                color: "#000066",
                borderBottom: "2px solid #000066",
                pb: 1,
                mb: 2,
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              年間スケジュール
            </Typography>
            <Typography
              sx={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}
            >
              スケジュールを書く
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                color: "#000066",
                borderBottom: "2px solid #000066",
                pb: 1,
                mb: 2,
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              実績
            </Typography>
            <Typography
              sx={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}
            >
              実績について書く
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                color: "#000066",
                borderBottom: "2px solid #000066",
                pb: 1,
                mb: 2,
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              環境
            </Typography>
            <Grid container spacing={2}>
              {environmentImages.map((image, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper
                    sx={{
                      borderRadius: "8px",
                      overflow: "hidden",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Box sx={{ width: "100%", height: "auto" }}>
                      <Image
                        src={image}
                        alt={`Environment image ${index + 1}`}
                        width={500}
                        height={300}
                        layout="responsive"
                      />
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                color: "#000066",
                borderBottom: "2px solid #000066",
                pb: 1,
                mb: 2,
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              アクセス
            </Typography>
            <Typography
              sx={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}
            >
              〒180-8633
              <br /> <br />
              東京都武蔵野市吉祥寺北町３丁目３−１
            </Typography>

            <Box sx={{ mt: 2, borderRadius: "8px", overflow: "hidden" }}>
              <Box ref={mapRef} sx={{ width: "100%", height: "450px" }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Page;
