import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Heading from "../../common/Heading";
import NewsCard from "./NewsItemCard";
import { NewsData } from "./NewsData";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const News = () => {
  return (
    <>
      <Grid item xs={10} md={3.5}>
        <Link href="/more" underline="none">
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            marginBottom={{ xs: -3.5, md: -4 }}
            marginTop={{ md: 1 }}
          >
            <Typography
              fontSize={{ xs: 13, md: 16 }}
              fontWeight={"bold"}
              color={"#a20100"}
            >
              MORE
            </Typography>
            <ChevronRightIcon fontSize="medium" sx={{ color: "#a20100" }} />
          </Box>
        </Link>
        <Box pb={{ xs: 3, md: 5 }}>
          <Heading title="NEWS" />
          <Box width="100%" height={1.2} bgcolor="#00154b" />
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
    </>
  );
};

export default News;
