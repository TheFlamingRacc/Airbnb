import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import StarIcon from "@mui/icons-material/Star";

export default function Rating({ children }: PropsWithChildren) {
  return (
    <Typography
      component={"span"}
      sx={{ textWrap: "nowrap" }}
      fontSize={"inherit"}
      display={"flex"}
      alignItems={"center"}
      color="inherit"
    >
      <StarIcon fontSize="inherit" />
      {children}
    </Typography>
  );
}
