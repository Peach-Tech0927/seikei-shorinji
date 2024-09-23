import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Heading from "../../common/Heading";
import NewsCard from "./NewsItemCard";
import { NewsData } from "./NewsData";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const News = () => {
  return (
    <>
      <Link href="/more" underline="none" />
      <Box position={"relative"} pb={{ xs: 3, md: 5 }}>
        <Heading title="NEWS" />
        <Box
          position={"absolute"}
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          top={6}
          right={0}
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
    </>
  );
};

export default News;
