import { Typography, Stack, Divider, LinearProgress } from "@mui/material";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MapIcon from "@mui/icons-material/Map";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import KeyIcon from "@mui/icons-material/Key";

type RatingValue = 1 | 2 | 3 | 4 | 5;
type RatingStats = Record<RatingValue, number>;

export default function Section3({
  rate,
  feedbackAmount,
  rating,
}: {
  rate: number;
  feedbackAmount: number;
  rating: {
    clean: number;
    accuracy: number;
    arriving: number;
    communication: number;
    location: number;
    quality: number;
    stats: RatingStats;
  };
}) {
  const blockTitles = [
    "Чистота",
    "Точність",
    "Прибуття",
    "Комунікація",
    "Розташування",
    "Ціна/якість",
  ];
  const blockIcons = [
    <SanitizerIcon
      sx={{
        width: 30,
        height: 30,
        mt: "auto",
        mb: 1,
      }}
    />,
    <CheckCircleIcon
      sx={{
        width: 30,
        height: 30,
        mt: "auto",
        mb: 1,
      }}
    />,
    <KeyIcon
      sx={{
        width: 30,
        height: 30,
        mt: "auto",
        mb: 1,
      }}
    />,
    <ChatBubbleIcon
      sx={{
        width: 30,
        height: 30,
        mt: "auto",
        mb: 1,
      }}
    />,
    <MapIcon />,
    <LocalOfferIcon
      sx={{
        width: 30,
        height: 30,
        mt: "auto",
        mb: 1,
      }}
    />,
  ];
  const blocksArray = [
    rating.clean,
    rating.accuracy,
    rating.communication,
    rating.location,
    rating.quality,
  ];
  const ratings: RatingValue[] = [5, 4, 3, 2, 1];

  return (
    <Stack spacing={2}>
      <Typography
        fontSize={28}
        display={"flex"}
        alignItems={"center"}
        color="text.primary"
      >
        <StarIcon fontSize="inherit" /> {rate} •{" "}
        <Typography fontSize={"inherit"} component={"span"}>
          {feedbackAmount === 0 ? "" : feedbackAmount}{" "}
          {feedbackAmount === 0
            ? ""
            : feedbackAmount === 1
            ? "відгук"
            : "відгуків"}
        </Typography>
      </Typography>
      <Stack
        justifyContent={"space-between"}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{ height: "110px" }}
          />
        }
        direction={"row"}
        minHeight={50}
        color={"text.primary"}
      >
        <Stack width={"11%"}>
          <Typography mb={1}>Загальний рейтинг</Typography>
          {ratings.map((i) => (
            <Typography
              key={i}
              lineHeight="90%"
              fontSize={14}
              display="flex"
              alignItems="center"
              gap={1}
            >
              {i}
              <LinearProgress
                sx={{ width: "100%", borderRadius: "99px" }}
                variant="determinate"
                value={rating.stats[i]}
              />
            </Typography>
          ))}
        </Stack>
        {blocksArray.map((item, i) => (
          <Stack width={"11%"}>
            <Typography>{blockTitles[i]}</Typography>
            <Typography fontWeight={600}>{item}</Typography>
            {blockIcons[i]}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
