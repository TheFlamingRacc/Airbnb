import Link from "next/link";
import { Typography } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";

type ShowMoreButtonProps = {
  href: string;
  arrowed?: boolean;
};

export default function ShowMoreButton({
  href,
  arrowed = false,
}: ShowMoreButtonProps) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Typography
        display={"flex"}
        alignItems={"center"}
        fontWeight={600}
        color="text.secondary"
        sx={{ textDecoration: "underline", cursor: "pointer" }}
      >
        Показати більше {arrowed && <ArrowForwardIos fontSize="small" />}
      </Typography>
    </Link>
  );
}
