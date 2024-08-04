import { Link } from "@mui/material";
import React from "react";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      underline="none"
      color="white"
      px={2}
      sx={{
        cursor: "pointer",
        display: "inline-block",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.3)",
        },
      }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
