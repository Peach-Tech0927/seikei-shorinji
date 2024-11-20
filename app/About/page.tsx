import React from "react";
import Link from "next/link";
import { AppBar, Box, Grid, Typography, Container, Paper } from "@mui/material";

const Page1: React.FC = () => {
  const environmentImages = [
    "https://user0514.cdnw.net/shared/img/thumb/aig-ai230531008-xl_TP_V.jpg",
    "https://th.bing.com/th/id/OIP.wIUxzLQ6VEPwpxjfer-VtQEsDH?rs=1&pid=ImgDetMain",
    "https://user0514.cdnw.net/shared/img/thumb/aig-ai230531008-xl_TP_V.jpg",
    "https://user0514.cdnw.net/shared/img/thumb/aig-ai230531008-xl_TP_V.jpg",
    "https://user0514.cdnw.net/shared/img/thumb/aig-ai230531008-xl_TP_V.jpg",
    "https://user0514.cdnw.net/shared/img/thumb/aig-ai230531008-xl_TP_V.jpg",
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ boxShadow: 0, bgcolor: "transparent", height: "auto" }}
      >
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
          <nav
            style={{
              marginBottom: "2rem",
              fontSize: "1.2rem",
              color: "#555",
              textTransform: "uppercase",
            }}
          >
            <Typography component="h4">
              <Link href="/" style={{ color: "#555" }}>
                HOME
              </Link>{" "}
              {">"} ABOUT
            </Typography>
          </nav>

          <Box style={{ marginBottom: "3rem" }}>
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

          <Box style={{ marginBottom: "3rem" }}>
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

          <Box style={{ marginBottom: "3rem" }}>
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
              style={{
                paddingTop: "1rem",
                listStyleType: "disc",
                fontSize: "1.2rem",
                color: "#555",
              }}
            >
              内容
            </Box>
          </Box>

          <Box style={{ marginBottom: "3rem" }}>
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

          <Box style={{ marginBottom: "3rem" }}>
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

          <Box style={{ marginBottom: "3rem" }}>
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

          <Box style={{ marginBottom: "3rem" }}>
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
                    <img
                      src={image}
                      alt={`環境画像 ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box style={{ marginBottom: "3rem" }}>
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.5037631415016!2d139.57131077598044!3d35.71382732818242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ee522d0b612d%3A0xaadc4b6ba9248642!2z5oiQ6LmK5aSn5a2m!5e0!3m2!1sja!2sjp!4v1730874950995!5m2!1sja!2sjp"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Page1;
