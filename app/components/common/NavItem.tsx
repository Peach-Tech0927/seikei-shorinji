import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { SxProps, Theme } from "@mui/material";

interface NavItemProps {
  href: string;
  label: string;
  sx?: SxProps<Theme>;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, sx }) => {
  return (
    <ListItem
      button
      component="a"
      href={href}
      sx={{ width: "100%", textAlign: "center", py: 1, ...sx }}
    >
      <ListItemText primary={label} />
    </ListItem>
  );
};

export default NavItem;
