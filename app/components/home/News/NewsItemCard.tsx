import React from "react";
import { NewsDataProps } from "./NewsData";
import { Typography } from "@mui/material";

const NewsItemCard: React.FC<NewsDataProps> = ({ date, content }) => {
  return (
    <>
      <Typography
        fontSize={{ xs: 10, md: 13 }}
        fontWeight={"bold"}
        mb={1}
        color={"#a20100"}
      >
        {date}
      </Typography>
      <Typography fontSize={{ xs: 9, md: 14 }} letterSpacing={{ md: 1 }}>
        {content}
      </Typography>
    </>
  );
};

export default NewsItemCard;
