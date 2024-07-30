"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { styled } from "@mui/material";

const FirstView = () => {
  const images = [
    "/1536*960.png",
    "/1536*960.png",
    "/1536*960.png",
    "/1536*960.png",
  ];

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
      style={{ height: "80vh" }}
    >
      {images.map((src) => (
        <SwiperSlide key={src}>
          <StyledImage src={src} alt={`Slide ${src}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const StyledImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

export default FirstView;
