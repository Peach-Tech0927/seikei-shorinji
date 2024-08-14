import React from "react";
import { NewsDataProps } from "./NewsData";
import { Typography } from "@mui/material";

const NewsCard: React.FC<NewsDataProps> = ({ date, content }) => {
  return (
    <>
      <Typography fontSize={{ xs: 10, md: 13 }} fontWeight={"bold"} mb={1}>
        {date}
      </Typography>
      <Typography fontSize={{ xs: 9, md: 14 }} letterSpacing={{ md: 1 }}>
        {content}
      </Typography>
    </>
  );
};

export default NewsCard;
