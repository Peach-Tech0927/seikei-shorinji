"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { styled, useMediaQuery, useTheme } from "@mui/material";

const FirstView = () => {
  const images = [
    "/1536*960.png",
    "/1536*960.png",
    "/1536*960.png",
    "/1536*960.png",
  ];
  const theme = useTheme();
  const isPCScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Swiper
      slidesPerView={1.2}
      centeredSlides={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      style={{ height: isPCScreen ? "80vh" : "auto" }}
    >
      {images.map((src) => (
        <SwiperSlide key={src}>
          <StyledImage src={src} alt={`Slide ${src}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

export default FirstView;
