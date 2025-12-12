"use client";

import {
  Box,
  IconButton,
  Typography,
  Button,
  Divider,
  Avatar,
  Paper,
  Grid,
  Stack,
  LinearProgress,
  Rating,
} from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import TranslateIcon from "@mui/icons-material/Translate";
import ImagesList from "./components/ImagesList";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import PaperLikeButton from "../components/PaperLikeButton";
import ShareAndSaveButtonGroup from "./components/ShareAndSaveButtonGroup";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import MainRules, { RuleTypes } from "./components/MainRules";
import Amenities, { AmenitieTypes } from "./components/Amenities";
import StickySubSection from "./components/StickySubSection";
import DateRangePickerCalendar from "./components/DateRangePickerCalendar";
import { useState } from "react";
import { Dayjs } from "dayjs";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyIcon from "@mui/icons-material/Key";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MapIcon from "@mui/icons-material/Map";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Feedback from "./components/Feedback";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ArrowForwardIos, ShieldSharp } from "@mui/icons-material";

type userData = {
  icon?: string;
  name: string;
  time: string;
  rate: number;
  date: string;
  amount: string;
  message: string;
  id: number;
};

type OwnerType = {
  ownerName: string;
  ownerAmount: number;
  ownerIcon: null | string;
  allFeedbacks: number;
  averageRate: number;
  workingTimeAmount: number;
  profession: string;
  bestHobbie: string;
  shortDescription: string;
  isSuper: boolean;
  answerSpeedPercentage: number;
  answerInfo: string;
};

type PageDataType = {
  apartmentTitle: string;
  apartmentLocation: string;
  apartmentDescription: string;
  details: string[];
  rate: number;
  feedbackAmount: number;
  guestChoise: boolean;
  owner: OwnerType;
  ruleTypes: RuleTypes[];
  additionalSubSectionText?: string;
  amenities: AmenitieTypes[];
  disableDates?: string[];
  price: number;
  rating: {
    clean: number;
    accuracy: number;
    arriving: number;
    communication: number;
    location: number;
    quality: number;
    stats: {
      5: number;
      4: number;
      3: number;
      2: number;
      1: number;
    };
  };
  feedbacks: userData[];
};

const pageData: PageDataType = {
  apartmentTitle: "Апартаменти Scandi Group №18",
  apartmentLocation: "Варшава, Польща",
  apartmentDescription: "Варшава, Польща: Помешкання для оренди цілком",
  details: ["2 гостя", "1 спальня", "1 ліжко", "1 ванна кімната"],
  rate: 4.98,
  feedbackAmount: 30,
  guestChoise: true,
  owner: {
    ownerName: "Arnold",
    ownerAmount: 3,
    ownerIcon: null,
    allFeedbacks: 9856,
    averageRate: 4.56,
    workingTimeAmount: 14,
    profession: "Оренда помешкань KyivApts",
    bestHobbie: "Подорожі",
    shortDescription:
      "Привіт! Мене звати Арнольд, і я керую провідним агентством з короткострокової та довгострокової оренди – з дивовижним персоналом професіоналів, що базуються в",
    isSuper: true,
    answerSpeedPercentage: 100,
    answerInfo: "Відповідає протягом години",
  },
  ruleTypes: ["sharedBathroom", "commonRoom", "multiplePeople"],
  additionalSubSectionText:
    "Капсульна кімната - це приватний вільний простір, який дозволить вам відпочити й почуватися комфортно. У номері є ортопедичний матрац, кондиціонер, Wi-Fi, шафка для речей. Ванна кімната розташована на підлозі.",
  amenities: [
    "bath",
    "hotWater",
    "conditioner",
    "dishes",
    "hangers",
    "heater",
    "heating",
    "independentArrival",
    "iron",
    "kitchen",
    "longLive",
    "luggage",
    "parking",
    "refridgerator",
    "tv",
    "wifi",
  ],
  disableDates: ["2025/12/10", "2025/12/15", "2025/12/17"],
  price: 1234,
  rating: {
    clean: 4.7,
    accuracy: 4.5,
    arriving: 4.3,
    communication: 4.2,
    location: 4.8,
    quality: 4.9,
    stats: {
      5: 87,
      4: 5,
      3: 3,
      2: 2,
      1: 2,
    },
  },
  feedbacks: [
    {
      id: 1,
      name: "Olivia",
      time: "4 роки на Airbnb",
      rate: 5,
      date: "1 день тому",
      amount: "2 ночі",
      message:
        "Чудове місце! Дуже чисто, затишно та сучасно. Локація ідеальна — усе поруч. Господар швидко відповідав і дав чудові поради щодо району.",
    },
    {
      id: 2,
      name: "Jonathan",
      time: "6 років на Airbnb",
      rate: 4,
      date: "5 днів тому",
      amount: "тиждень",
      message:
        "Квартира повністю відповідає опису. Тихий будинок, комфортне ліжко, швидкий Wi-Fi. Лише хотілося б трохи більше кухонного приладдя.",
    },
    {
      id: 3,
      name: "Maria",
      time: "1 рік на Airbnb",
      rate: 5,
      date: "2 тижні тому",
      amount: "3 ночі",
      message:
        "Перебування було чудовим! Дуже просторна квартира з приємним ароматом і стильним інтер’єром. Особливо сподобався вигляд із вікна.",
    },
    {
      id: 4,
      name: "Dmitro",
      time: "3 роки на Airbnb",
      rate: 4,
      date: "3 тижні тому",
      amount: "вихідні",
      message:
        "Господар уважний та ввічливий. Квартира чиста, хоч і не дуже велика. Розташування — супер, поруч зупинка та магазини.",
    },
    {
      id: 5,
      name: "Alicia",
      time: "9 років на Airbnb",
      rate: 5,
      date: "1 місяць тому",
      amount: "5 ночей",
      message:
        "Фантастичне перебування. Дуже тихо вночі, що рідкість для центру міста. Ліжко зручне, інтер’єр затишний. Обов’язково повернуся!",
    },
    {
      id: 6,
      name: "Robert",
      time: "7 років на Airbnb",
      rate: 3,
      date: "1 місяць тому",
      amount: "кілька ночей",
      message:
        "Квартира нормальна, але не ідеальна. Трохи холодно ввечері, хоча господар швидко приніс обігрівач. Загалом непоганий варіант за таку ціну.",
    },
    {
      id: 7,
      name: "Sofia",
      time: "2 роки на Airbnb",
      rate: 5,
      date: "півтора місяці тому",
      amount: "тиждень",
      message:
        "Усе сподобалося! Дуже чисто, пральна машина працює прекрасно, кухня повністю укомплектована. Ідеально для роботи та відпочинку.",
    },
    {
      id: 8,
      name: "Leon",
      time: "5 років на Airbnb",
      rate: 4,
      date: "2 місяці тому",
      amount: "4 ночі",
      message:
        "Апартаменти затишні, є все необхідне. Єдине — трохи шумно ввечері через сусідній бар, але в берушах спалося добре.",
    },
    {
      id: 9,
      name: "Emily",
      time: "8 років на Airbnb",
      rate: 5,
      date: "2 місяці тому",
      amount: "вихідні",
      message:
        "Все ідеально. Господар навіть залишив невеликий подарунок на кухні — дуже приємний жест. Чистота на висоті.",
    },
    {
      id: 10,
      name: "Oleh",
      time: "10 років на Airbnb",
      rate: 4,
      date: "3 місяці тому",
      amount: "1 ніч",
      message:
        "Добре місце для короткого перебування. Зручне ліжко, швидке заселення. Трішки тісна ванна кімната, але чисто.",
    },
  ],
};

export default function Rooms() {
  const [dateValue, setDateValue] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);
  return (
    <>
      <Box>
        <Header withNavigation={false} />
        <Stack
          alignItems={"center"}
          px={5}
          sx={{
            backgroundColor: "background.default",
            pt: 5,
          }}
        >
          <Stack
            sx={{
              backgroundColor: "background.default",
              maxWidth: "1200px",
            }}
            spacing={2}
          >
            {/*******************section1*********************/}

            <Box display={"flex"} justifyContent={"space-between"}>
              <Box display={"flex"}>
                <IconButton>
                  <TranslateIcon />
                </IconButton>
                <Typography fontSize={25} fontWeight={700} color="text.primary">
                  {pageData.apartmentTitle}
                </Typography>
              </Box>
              <ShareAndSaveButtonGroup />
            </Box>
            <ImagesList />

            {/*******************section2*********************/}

            <Stack
              direction={{ xs: "column", md: "row" }}
              justifyContent={"space-between"}
            >
              <Stack spacing={2} width={"60%"} divider={<Divider />}>
                {/****subsection1****/}
                <Box>
                  <Typography
                    fontSize={25}
                    fontWeight={700}
                    color="text.primary"
                  >
                    {pageData.apartmentDescription}
                  </Typography>
                  <Typography color="text.secondary">
                    {pageData.details.join(" • ")}
                  </Typography>{" "}
                  <Typography
                    color="text.secondary"
                    alignItems={"center"}
                    display={"flex"}
                  >
                    <StarIcon fontSize="inherit" /> {pageData.rate} •{" "}
                    <Link style={{ textDecoration: "underline" }} href={""}>
                      {pageData.feedbackAmount === 0
                        ? ""
                        : pageData.feedbackAmount}{" "}
                      {pageData.feedbackAmount === 0
                        ? ""
                        : pageData.feedbackAmount === 1
                        ? "відгук"
                        : "відгуки"}
                    </Link>
                  </Typography>
                </Box>
                {/****subsection2****/}
                <Box display={"flex"} gap={3}>
                  <Avatar
                    sx={{
                      height: "50px",
                      width: "50px",
                    }}
                    src={
                      pageData.owner.ownerIcon === null
                        ? ""
                        : pageData.owner.ownerIcon
                    }
                  >
                    {pageData.owner.ownerName.slice(0, 2).toUpperCase()}
                  </Avatar>
                  <Stack justifyContent={"space-between"}>
                    <Typography fontWeight={600} color="text.primary">
                      Господар: {pageData.owner.ownerName}
                    </Typography>
                    <Typography color="text.secondary">
                      {pageData.owner.ownerAmount > 4
                        ? `Супергосподар • Приймає гостей протягом ${pageData.owner.ownerAmount} років`
                        : `Приймає гостей протягом ${pageData.owner.ownerAmount} років`}
                    </Typography>
                  </Stack>
                </Box>
                {/****subsection3****/}
                <Stack spacing={2}>
                  {pageData.ruleTypes.map((rule, i) => (
                    <MainRules key={i} ruleType={rule} />
                  ))}
                </Stack>
                {/****subsection4****/}
                <Paper
                  sx={{
                    p: 2,
                  }}
                >
                  <Typography color="text.secondary">
                    Деякі дані відображаються мовою оригіналу.{" "}
                    <Link style={{ textDecoration: "underline" }} href={""}>
                      Показати оригінал
                    </Link>
                  </Typography>
                </Paper>
                {/****subsection5****/}
                {pageData.additionalSubSectionText && (
                  <Typography color="text.primary">
                    {pageData.additionalSubSectionText}
                  </Typography>
                )}
                {/****subsection6****/}
                <Box>
                  <Typography
                    fontSize={25}
                    fontWeight={700}
                    color="text.primary"
                  >
                    Які тут зручності
                  </Typography>
                  <Grid container columnSpacing={30} mt={2} mb={3}>
                    <Grid>
                      <Stack spacing={3}>
                        {pageData.amenities.slice(0, 5).map((amenity, i) => (
                          <Amenities key={i} type={amenity} />
                        ))}
                      </Stack>
                    </Grid>
                    <Grid spacing={5}>
                      <Stack spacing={3}>
                        {pageData.amenities.slice(5, 10).map((amenity, i) => (
                          <Amenities key={i} type={amenity} />
                        ))}
                      </Stack>
                    </Grid>
                  </Grid>
                  <PaperLikeButton>
                    Показати всі зручності ({pageData.amenities.length})
                  </PaperLikeButton>
                </Box>
                {/****subsection7****/}
                <Box>
                  <Typography
                    fontSize={25}
                    fontWeight={700}
                    color="text.primary"
                  >
                    {dateValue[0] === null
                      ? "Виберіть дату в'їзду"
                      : dateValue[1] === null
                      ? "Виберіть дату виїзду"
                      : `${pageData.apartmentLocation}: ${dateValue[1]
                          .startOf("day")
                          .diff(dateValue[0].startOf("day"), "day")} ночі`}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    alignItems={"center"}
                    display={"flex"}
                  >
                    {dateValue[0] !== null && dateValue[1] !== null
                      ? `${dateValue[0]} - ${dateValue[1]}`
                      : "Щоб переглянути точну ціну, вкажіть дати подорожі"}
                  </Typography>
                  <DateRangePickerCalendar
                    value={dateValue}
                    setValue={setDateValue}
                    disableDates={pageData.disableDates || []}
                  />
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <IconButton>
                      <KeyboardIcon />
                    </IconButton>
                    <Button
                      sx={{
                        color: "text.primary",
                        textDecoration: "underline",
                        textTransform: "none",
                        "&:hover": {
                          fontWeight: 600,
                          textDecoration: "underline !important",
                        },
                      }}
                      onClick={() => setDateValue([null, null])}
                    >
                      Очистити дати
                    </Button>
                  </Box>
                </Box>
              </Stack>
              <StickySubSection
                value={dateValue}
                setValue={setDateValue}
                price={pageData.price}
              />
            </Stack>
            <Divider />
            {/*******************section3*********************/}
            <Stack spacing={2}>
              <Typography
                fontSize={28}
                display={"flex"}
                alignItems={"center"}
                color="text.primary"
              >
                <StarIcon fontSize="inherit" /> {pageData.rate} •{" "}
                <Typography fontSize={"inherit"} component={"span"}>
                  {pageData.feedbackAmount === 0 ? "" : pageData.feedbackAmount}{" "}
                  {pageData.feedbackAmount === 0
                    ? ""
                    : pageData.feedbackAmount === 1
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
                  <Typography
                    lineHeight={"90%"}
                    fontSize={14}
                    display={"flex"}
                    alignItems={"center"}
                    gap={1}
                  >
                    5
                    <LinearProgress
                      sx={{ width: "100%", borderRadius: "99px" }}
                      variant="determinate"
                      value={pageData.rating.stats[5]}
                    />
                  </Typography>

                  <Typography
                    lineHeight={"90%"}
                    fontSize={14}
                    display={"flex"}
                    alignItems={"center"}
                    gap={1}
                  >
                    4
                    <LinearProgress
                      sx={{ width: "100%", borderRadius: "99px" }}
                      variant="determinate"
                      value={pageData.rating.stats[4]}
                    />
                  </Typography>
                  <Typography
                    lineHeight={"90%"}
                    fontSize={14}
                    display={"flex"}
                    alignItems={"center"}
                    gap={1}
                  >
                    3
                    <LinearProgress
                      sx={{ width: "100%", borderRadius: "99px" }}
                      variant="determinate"
                      value={pageData.rating.stats[3]}
                    />
                  </Typography>
                  <Typography
                    lineHeight={"90%"}
                    fontSize={14}
                    display={"flex"}
                    alignItems={"center"}
                    gap={1}
                  >
                    2
                    <LinearProgress
                      sx={{ width: "100%", borderRadius: "99px" }}
                      variant="determinate"
                      value={pageData.rating.stats[2]}
                    />
                  </Typography>
                  <Typography
                    lineHeight={"90%"}
                    fontSize={14}
                    display={"flex"}
                    alignItems={"center"}
                    gap={1}
                  >
                    1
                    <LinearProgress
                      sx={{ width: "100%", borderRadius: "99px" }}
                      variant="determinate"
                      value={pageData.rating.stats[1]}
                    />
                  </Typography>
                </Stack>
                <Stack width={"11%"}>
                  <Typography>Чистота</Typography>
                  <Typography fontWeight={600}>
                    {pageData.rating.clean}
                  </Typography>
                  <SanitizerIcon
                    sx={{
                      width: 30,
                      height: 30,
                      mt: "auto",
                      mb: 1,
                    }}
                  />
                </Stack>
                <Stack width={"11%"}>
                  <Typography>Точність</Typography>
                  <Typography fontWeight={600}>
                    {pageData.rating.accuracy}
                  </Typography>
                  <CheckCircleIcon
                    sx={{
                      width: 30,
                      height: 30,
                      mt: "auto",
                      mb: 1,
                    }}
                  />
                </Stack>
                <Stack width={"11%"}>
                  <Typography>Прибуття</Typography>
                  <Typography fontWeight={600}>
                    {pageData.rating.arriving}
                  </Typography>
                  <KeyIcon
                    sx={{
                      width: 30,
                      height: 30,
                      mt: "auto",
                      mb: 1,
                    }}
                  />
                </Stack>
                <Stack width={"11%"}>
                  <Typography>Комунікація</Typography>
                  <Typography fontWeight={600}>
                    {pageData.rating.communication}
                  </Typography>
                  <ChatBubbleIcon
                    sx={{
                      width: 30,
                      height: 30,
                      mt: "auto",
                      mb: 1,
                    }}
                  />
                </Stack>
                <Stack width={"11%"}>
                  <Typography>Розташування</Typography>
                  <Typography fontWeight={600}>
                    {pageData.rating.location}
                  </Typography>
                  <MapIcon
                    sx={{
                      width: 30,
                      height: 30,
                      mt: "auto",
                      mb: 1,
                    }}
                  />
                </Stack>
                <Stack width={"11%"}>
                  <Typography>Ціна/якість</Typography>
                  <Typography fontWeight={600}>
                    {pageData.rating.quality}
                  </Typography>
                  <LocalOfferIcon
                    sx={{
                      width: 30,
                      height: 30,
                      mt: "auto",
                      mb: 1,
                    }}
                  />
                </Stack>
              </Stack>
              <Divider />
              {/*******************section4*********************/}
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack spacing={4}>
                  {pageData.feedbacks.slice(0, 3).map((feedback) => (
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
              <Divider />
              {/*******************section5*********************/}
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
                    <Stack
                      mx={10}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Avatar
                        sx={{
                          height: "100px",
                          width: "100px",
                        }}
                        src={
                          pageData.owner.ownerIcon
                            ? pageData.owner.ownerIcon
                            : ""
                        }
                      >
                        {pageData.owner.ownerName.slice(0, 2).toUpperCase()}
                      </Avatar>
                      <Typography
                        color="text.primary"
                        fontSize={26}
                        fontWeight={700}
                      >
                        {pageData.owner.ownerName}
                      </Typography>
                      {pageData.owner.isSuper && (
                        <Typography
                          display={"flex"}
                          alignItems={"center"}
                          color="text.secondary"
                          fontSize={14}
                        >
                          <WorkspacePremiumIcon fontSize="small" />{" "}
                          Супергосподар
                        </Typography>
                      )}
                    </Stack>
                    <Stack divider={<Divider />} spacing={1}>
                      <Stack>
                        <Typography
                          color="text.primary"
                          fontWeight={700}
                          fontSize={24}
                        >
                          {pageData.owner.allFeedbacks}
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
                          {pageData.owner.averageRate} <StarIcon />
                        </Typography>
                        <Typography color="text.primary" fontSize={13}>
                          Рейтинг
                        </Typography>
                      </Stack>
                      <Stack>
                        <Typography
                          color="text.primary"
                          fontWeight={700}
                          fontSize={24}
                        >
                          {pageData.owner.workingTimeAmount}
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
                        <WorkOutlineIcon /> Моя професія:{" "}
                        {pageData.owner.profession}
                      </Typography>
                      <Typography
                        color="text.primary"
                        display={"flex"}
                        gap={2}
                        alignItems={"center"}
                      >
                        <FavoriteBorderIcon /> Найбільше захоплення:{" "}
                        {pageData.owner.bestHobbie}
                      </Typography>
                    </Stack>
                    <Stack spacing={2}>
                      <Typography color="text.primary">
                        {pageData.owner.shortDescription}
                      </Typography>
                      <Typography
                        display={"flex"}
                        alignItems={"center"}
                        color="text.primary"
                        fontWeight={600}
                        sx={{
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        Показати більше <ArrowForwardIos fontSize="small" />
                      </Typography>
                    </Stack>
                    {pageData.owner.isSuper && (
                      <Stack spacing={1}>
                        <Typography color="text.primary" fontWeight={1000}>
                          {pageData.owner.ownerName} - супергосподар
                        </Typography>
                        <Typography color="text.primary">
                          Супергосподарі – це досвідчені господарі з високим
                          рейтингом, які роблять все можливе для комфорту своїх
                          гостей.
                        </Typography>
                      </Stack>
                    )}
                    <Box>
                      <PaperLikeButton>Написати господарю</PaperLikeButton>
                    </Box>
                    <Stack>
                      <Typography color="text.primary">
                        Швидкість відповіді:{" "}
                        {pageData.owner.answerSpeedPercentage}%
                      </Typography>
                      <Typography color="text.primary">
                        {pageData.owner.answerInfo}
                      </Typography>
                    </Stack>
                    <Typography
                      display={"flex"}
                      gap={2}
                      alignItems={"center"}
                      color="text.secondary"
                      fontSize={13}
                    >
                      <ShieldSharp color="primary" />
                      Щоб захистити свої платежі, для надсилання грошей та
                      спілкування з господарями користуйтеся лише платформою
                      Airbnb.
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}
