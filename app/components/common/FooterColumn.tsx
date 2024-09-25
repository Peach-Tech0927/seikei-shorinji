import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import CustomLink from "./CustomLink";

interface FooterItem {
  href: string;
  title: string;
}

interface FooterColumnProps {
  title: string;
  items: FooterItem[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => (
  <Grid item xs={6} sm={4}>
    <Typography variant="h6" mb={1} color={"white"}>
      {title}
    </Typography>
    {items.map((Item) => (
      <Box key={Item.href} mb={1}>
        <CustomLink href={Item.href}>{Item.title}</CustomLink>
      </Box>
    ))}
  </Grid>
);

export default FooterColumn;
