import { Box, Divider } from "@mui/material";
import React, { Fragment } from "react";

import { NewsData } from "./NewsData";
import Heading from "../common/Heading";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <>
      <Box pl={45} py={28} height={"30vh"} justifyContent={"center"}>
        <Box position={"relative"} pb={5}>
          <Heading title="NEWS" />
        </Box>
        <Box position={"relative"}>
          {NewsData.map((data) => (
            <Fragment key={data.date}>
              <Box marginLeft={1.2}>
                <NewsCard date={data.date} content={data.content} />
              </Box>
              <Divider
                sx={{
                  width: "32%",
                  marginTop: 2,
                  marginBottom: 2,
                  borderStyle: "dashed",
                  borderWidth: 1,
                  borderColor: "#cccccc",
                }}
              />
            </Fragment>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default News;
