import { Typography } from "@mui/material";

type FooterColumnProps = {
  title: string;
};

const FooterColumn: React.FC<FooterColumnProps> = ({ title }) => {
  return (
    <Typography variant="h6" mb={1} color={"white"}>
      {title}
    </Typography>
  );
};

export default FooterColumn;
