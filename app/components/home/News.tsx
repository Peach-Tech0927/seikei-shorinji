import { Box, Divider } from "@mui/material";
import React, { Fragment } from "react";

import { NewsData } from "./NewsData";
import Heading from "../common/Heading";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <>
      <Box height={"80vh"} position={"relative"}>
        <Heading title="NEWS" />
      </Box>
      <Box position={"relative"} marginTop={-78}>
        {NewsData.map((data) => (
          <Fragment key={data.date}>
            <Box marginLeft={1.5}>
              <NewsCard date={data.date} content={data.content} />
            </Box>
            <Divider
              sx={{ width: "25%", marginTop: 2, marginBottom: 2 }}
              color={"#f7f7f7"}
            />
          </Fragment>
        ))}
      </Box>
    </>
  );
};

export default News;
