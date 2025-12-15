import { Stack, Typography, Paper, Avatar, Divider, Box } from "@mui/material";
import { pageData } from "../pageData";
import PaperLikeButton from "@/app/components/PaperLikeButton";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShowMoreButton from "./ShowMoreButton";
import { ShieldSharp } from "@mui/icons-material";

const {
  name,
  iconUrl,
  isSuper,
  allFeedbacks,
  averageRate,
  answerSpeedPercentage,
  answerInfo,
  workingTimeAmount,
  profession,
  bestHobbie,
  shortDescription,
} = pageData.owner;

export default function MeetOwnerSection() {
  return (
    <Stack spacing={3}>
      <Typography color="text.primary" fontSize={24} fontWeight={700}>
        Познайомтеся з господарем
      </Typography>
      <Stack direction={"row"} gap={8} alignItems="flex-start">
        <Paper
          sx={{
            p: 2,
            borderRadius: 5,
            boxShadow: 3,
            backgroundColor: "background.default",
            display: "flex",
            height: "auto",
          }}
        >
          <Stack mx={10} justifyContent={"center"} alignItems={"center"}>
            <Avatar
              sx={{
                height: "100px",
                width: "100px",
              }}
              src={iconUrl ? iconUrl : ""}
            >
              {name.slice(0, 2).toUpperCase()}
            </Avatar>
            <Typography color="text.primary" fontSize={26} fontWeight={700}>
              {name}
            </Typography>
            {isSuper && (
              <Typography
                display={"flex"}
                alignItems={"center"}
                color="text.secondary"
                fontSize={14}
              >
                <WorkspacePremiumIcon fontSize="small" /> Супергосподар
              </Typography>
            )}
          </Stack>
          <Stack divider={<Divider />} spacing={1}>
            <Stack>
              <Typography color="text.primary" fontWeight={700} fontSize={24}>
                {allFeedbacks}
              </Typography>
              <Typography color="text.primary" fontSize={13}>
                Відгуки
              </Typography>
            </Stack>
            <Stack>
              <Typography
                color="text.primary"
                fontWeight={700}
                fontSize={24}
                display={"flex"}
                alignItems={"center"}
              >
                {averageRate} <StarIcon />
              </Typography>
              <Typography color="text.primary" fontSize={13}>
                Рейтинг
              </Typography>
            </Stack>
            <Stack>
              <Typography color="text.primary" fontWeight={700} fontSize={24}>
                {workingTimeAmount}
              </Typography>
              <Typography color="text.primary" fontSize={13}>
                років прийому гостей
              </Typography>
            </Stack>
          </Stack>
        </Paper>
        <Stack spacing={3} maxWidth={"60%"}>
          <Stack spacing={2}>
            <Typography
              color="text.primary"
              display={"flex"}
              gap={2}
              alignItems={"center"}
            >
              <WorkOutlineIcon /> Моя професія: {profession}
            </Typography>
            <Typography
              color="text.primary"
              display={"flex"}
              gap={2}
              alignItems={"center"}
            >
              <FavoriteBorderIcon /> Найбільше захоплення: {bestHobbie}
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography color="text.primary">{shortDescription}</Typography>
            <ShowMoreButton href="" arrowed />
          </Stack>
          {isSuper && (
            <Stack spacing={1}>
              <Typography color="text.primary" fontWeight={1000}>
                {name} - супергосподар
              </Typography>
              <Typography color="text.primary">
                Супергосподарі – це досвідчені господарі з високим рейтингом,
                які роблять все можливе для комфорту своїх гостей.
              </Typography>
            </Stack>
          )}
          <Box>
            <PaperLikeButton>Написати господарю</PaperLikeButton>
          </Box>
          <Stack>
            <Typography color="text.primary">
              Швидкість відповіді: {answerSpeedPercentage}%
            </Typography>
            <Typography color="text.primary">{answerInfo}</Typography>
          </Stack>
          <Typography
            display={"flex"}
            gap={2}
            alignItems={"center"}
            color="text.secondary"
            fontSize={13}
          >
            <ShieldSharp color="primary" />
            Щоб захистити свої платежі, для надсилання грошей та спілкування з
            господарями користуйтеся лише платформою Airbnb.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
