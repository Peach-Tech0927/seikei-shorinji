import { Box, Divider, Grid } from "@mui/material";
import React, { Fragment } from "react";

import { NewsData } from "./NewsData";
import Heading from "../common/Heading";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <>
      <Grid
        container
        pt={{ xs: 10, md: 20 }}
        pb={{ xs: 50, md: 36 }}
        justifyContent={"center"}
        spacing={{ xs: 45, md: 5 }}
      >
        <Grid item xs={10} md={3.5} height={"30vh"}>
          <Box position={"relative"} pb={{ xs: 3, md: 5 }}>
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
                    width: "100%",
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
        </Grid>
        <Grid item xs={10} md={3.5} height={"30vh"}>
          <Box position={"relative"} pb={{ xs: 3, md: 5 }}>
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
                    width: "100%",
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
        </Grid>
      </Grid>
    </>
  );
};

export default News;
