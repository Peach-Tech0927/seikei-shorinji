import { Box, Divider } from "@mui/material";
import React, { Fragment } from "react";

import { NewsData } from "./NewsData";
import Heading from "../common/Heading";
import { relative } from "path";

const News = () => {
  return (
    <>
      <Box height={"80vh"}>
        <Heading title="NEWS" />
      </Box>
      <Box>
        {NewsData.map((data) => (
          <Fragment key={data.date}>
            <Divider sx={{ width: "100%" }} color={"#f7f7f7"} />
          </Fragment>
        ))}
      </Box>
    </>
  );
};

export default News;
