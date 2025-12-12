import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { Star } from "@mui/icons-material";

export default function Sec2Subsec1({
  details,
  apartmentDescription,
  feedbackAmount,
  rate,
}: {
  details: string[];
  apartmentDescription: string;
  feedbackAmount: number;
  rate: number;
}) {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="text.primary">
        {apartmentDescription}
      </Typography>
      <Typography color="text.secondary">{details.join(" • ")}</Typography>{" "}
      <Typography color="text.secondary" alignItems={"center"} display={"flex"}>
        <Star fontSize="inherit" /> {rate} •{" "}
        <Link style={{ textDecoration: "underline" }} href={""}>
          {feedbackAmount === 0 ? "" : feedbackAmount}{" "}
          {feedbackAmount === 0
            ? ""
            : feedbackAmount === 1
            ? "відгук"
            : "відгуки"}
        </Link>
      </Typography>
    </Box>
  );
}
