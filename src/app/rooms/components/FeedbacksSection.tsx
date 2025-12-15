import { Typography, Stack, Divider, LinearProgress, Box } from "@mui/material";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MapIcon from "@mui/icons-material/Map";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import KeyIcon from "@mui/icons-material/Key";
import Feedback from "./Feedback";
import { pageData } from "../pageData";
import PaperLikeButton from "@/app/components/PaperLikeButton";

const { rate, rating, feedbackAmount, feedbacks } = pageData;

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
const ratings = [5, 4, 3, 2, 1];

export default function FeedbacksSection() {
  return (
    <Stack spacing={2}>
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
                  value={rating.stats[i as 1 | 2 | 3 | 4 | 5]}
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
      <Divider />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack spacing={4}>
          {feedbacks.slice(0, 3).map((feedback) => (
            <Feedback
              key={feedback.id}
              name={feedback.name}
              message={feedback.message}
              rate={feedback.rate}
              amount={feedback.amount}
              date={feedback.date}
              desc={feedback.time}
            />
          ))}
        </Stack>
        <Stack spacing={4}>
          {pageData.feedbacks.slice(3, 6).map((feedback) => (
            <Feedback
              key={feedback.id}
              name={feedback.name}
              message={feedback.message}
              rate={feedback.rate}
              amount={feedback.amount}
              date={feedback.date}
              desc={feedback.time}
            />
          ))}
        </Stack>
      </Stack>
      <Box display={"flex"} gap={3} alignItems={"center"}>
        <PaperLikeButton
          sx={{
            width: "120px",
            display: "inline-flex",
          }}
        >
          Показати всі {pageData.feedbacks.length} відгуків
        </PaperLikeButton>
        <Typography
          component={"a"}
          fontWeight={600}
          fontSize={12}
          color="text.secondary"
          sx={{
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Для чого потрібні відгуки
        </Typography>
      </Box>
    </Stack>
  );
}
