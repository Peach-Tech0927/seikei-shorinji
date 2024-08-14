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
        pb={{ xs: 6, md: 12 }}
        justifyContent={"center"}
        spacing={{ xs: 3, md: 5 }}
      >
        <Grid item xs={10} md={3.5}>
          <Box pb={{ xs: 3, md: 5 }}>
            <Heading title="NEWS" />
          </Box>
          <Box>
            {NewsData.map((data) => (
              <Fragment key={data.date}>
                <Box marginLeft={1.2}>
                  <NewsCard date={data.date} content={data.content} />
                </Box>
                <Divider
                  sx={{
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
        <Grid item xs={10} md={3.5}>
          <Box pb={{ xs: 3, md: 5 }}>
            <Heading title="NEWS" />
          </Box>
          <Box>
            {NewsData.map((data) => (
              <Fragment key={data.date}>
                <Box marginLeft={1.2}>
                  <NewsCard date={data.date} content={data.content} />
                </Box>
                <Divider
                  sx={{
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
