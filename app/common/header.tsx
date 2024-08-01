import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";
import Image from "next/image";

const Header = () => {
  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{ bgcolor: "#a20000", height: 85 }}
    >
      <Toolbar>
        <Box flexGrow={1} display="flex" alignItems="center" gap={2} py={2}>
          <Image src="/Shorinji（仮）.jpg" alt="logo" width={70} height={70} />
          <Typography color="white" fontSize={17} lineHeight={1}>
            Seikei
            <br /> Shorinji
            <br /> Club
          </Typography>
        </Box>
        <Box>
          <Link
            href="/home"
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
            HOME
          </Link>
          <Link
            href="/about"
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
            ABOUT
          </Link>
          <Link
            href="/member"
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
            MEMBER
          </Link>
          <Link
            href="/match"
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
            MATCH
          </Link>
          <Link
            href="/sns"
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
            SNS
          </Link>
          <Link
            href="/news"
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
            NEWS
          </Link>
          <Link
            href="/schedule"
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
            SCHEDULE
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
