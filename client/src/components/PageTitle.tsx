import { Typography } from "@mui/material";

interface Props {
  title: string;
}

function PageTitle({ title }: Props) {
  return (
    <h1
      style={{ fontWeight: "bold", textAlign: "center" }}
      className="page-title"
    >
      {title}
    </h1>
  );
}

export default PageTitle;
