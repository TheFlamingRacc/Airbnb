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
} from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import TranslateIcon from "@mui/icons-material/Translate";
import ImagesList from "./components/ImagesList";
import StarIcon from "@mui/icons-material/Star";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FlatwareIcon from "@mui/icons-material/Flatware";
import Link from "next/link";
import PaperLikeButton from "../components/PaperLikeButton";
import ShareAndSaveButtonGroup from "./components/ShareAndSaveButtonGroup";
import MainRules, { RuleTypes } from "./components/MainRules";
import Amenities, { AmenitieTypes } from "./components/Amenities";
type OwnerType = {
  ownerName: string;
  ownerAmount: number;
  ownerIcon: null | string;
};

type PageDataType = {
  apartmentTitle: string;
  apartmentDescription: string;
  details: string[];
  rate: number;
  feedbackAmount: number;
  guestChoise: boolean;
  owner: OwnerType;
  ruleTypes: RuleTypes[];
  additionalSubSectionText?: string;
  amenities: AmenitieTypes[];
};

const pageData: PageDataType = {
  apartmentTitle: "Апартаменти Scandi Group №18",
  apartmentDescription: "Варшава, Польща: Помешкання для оренди цілком",
  details: ["2 гостя", "1 спальня", "1 ліжко", "1 ванна кімната"],
  rate: 4.98,
  feedbackAmount: 30,
  guestChoise: true,
  owner: { ownerName: "Arnold", ownerAmount: 3, ownerIcon: null },
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
};

export default function Rooms() {
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
              <Stack spacing={2} width={"65%"} divider={<Divider />}>
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
                <Typography fontSize={25} fontWeight={700} color="text.primary">
                  Варшава: 2 ночі
                </Typography>
                <Typography
                  color="text.secondary"
                  alignItems={"center"}
                  display={"flex"}
                >
                  9 січ. 2026 р. - 11 січ. 2026 р.
                </Typography>
              </Stack>
              <Box
                sx={{
                  width: { xs: "100%", sm: "320px" },
                  position: "sticky",
                  top: { xs: 0, sm: "140px" },
                  alignSelf: "flex-start",
                }}
              >
                <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
                  <Typography fontWeight={700} fontSize={28} mb={2}>
                    / ніч
                  </Typography>

                  <Box display="flex" alignItems="center" gap={1} mb={2}>
                    <PeopleOutlineIcon />
                    <Typography>2 гості</Typography>
                  </Box>

                  <Box display="flex" alignItems="center" gap={1} mb={3}>
                    <Typography>Дати</Typography>
                  </Box>

                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{
                      py: 1.5,
                      fontWeight: 600,
                      borderRadius: "99px",
                      textTransform: "none",
                    }}
                  >
                    Забронювати
                  </Button>

                  <Typography fontSize={12} color="text.secondary" mt={2}>
                    Деякі дані відображаються мовою оригіналу.{" "}
                    <Box
                      component="span"
                      sx={{ textDecoration: "underline", cursor: "pointer" }}
                    >
                      Показати оригінал
                    </Box>
                  </Typography>
                </Paper>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}
