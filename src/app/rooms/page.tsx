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
import WavingHandOutlinedIcon from "@mui/icons-material/WavingHandOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import FlatwareIcon from "@mui/icons-material/Flatware";
import Link from "next/link";
import PaperLikeButton from "../components/PaperLikeButton";
import ShareAndSaveButtonGroup from "./components/ShareAndSaveButtonGroup";

const pageData = {
  apartmentTitle: "Апартаменти Scandi Group №18",
  apartmentDescription: "Варшава, Польща: Помешкання для оренди цілком",
  details: ["2 гостя", "1 спальня", "1 ліжко", "1 ванна кімната"],
  rate: 4.98,
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
                    <Link href={""}>відгуки</Link>
                  </Typography>
                </Box>
                {/****subsection1****/}
                <Box display={"flex"} gap={3}>
                  <Avatar
                    sx={{
                      height: "50px",
                      width: "50px",
                    }}
                  >
                    AV
                  </Avatar>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                  >
                    <Typography fontWeight={600} color="text.primary">
                      Господар: Курганський
                    </Typography>
                    <Typography color="text.secondary">
                      Приймає гостей протягом 4 років
                    </Typography>
                  </Box>
                </Box>
                {/****subsection1****/}
                <Stack spacing={2}>
                  <Box display={"flex"} gap={3}>
                    <ShowerOutlinedIcon
                      sx={{
                        height: "50px",
                        width: "50px",
                        color: "text.primary",
                      }}
                    />

                    <Stack justifyContent={"space-between"}>
                      <Typography fontWeight={600} color="text.primary">
                        Спільна ванна кімната
                      </Typography>
                      <Typography color="text.secondary">
                        Ви користуватиметеся ванною кімнатою спільно з іншими
                        людьми.
                      </Typography>
                    </Stack>
                  </Box>
                  <Box display="flex" gap={3} alignItems="flex-start">
                    <WavingHandOutlinedIcon
                      sx={{
                        height: "50px",
                        width: "50px",
                        color: "text.primary",
                      }}
                    />

                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"space-between"}
                    >
                      <Typography fontWeight={600} color="text.primary">
                        Приміщення спільного користування
                      </Typography>
                      <Typography color="text.secondary">
                        Деякі приміщення в помешканні використовуватимуться
                        спільно з іншими гостями.
                      </Typography>
                    </Box>
                  </Box>
                  <Box display={"flex"} gap={3}>
                    <PeopleOutlineIcon
                      sx={{
                        height: "50px",
                        width: "50px",
                        color: "text.primary",
                      }}
                    />

                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"space-between"}
                    >
                      <Typography fontWeight={600} color="text.primary">
                        Спільна кімната
                      </Typography>
                      <Typography color="text.secondary">
                        Окрім вас, кімнату можуть використовувати інші люди.
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
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
                <Typography color="text.primary">
                  Капсульна кімната - це приватний вільний простір, який
                  дозволить вам відпочити й почуватися комфортно. У номері є
                  ортопедичний матрац, кондиціонер, Wi-Fi, шафка для речей.
                  Ванна кімната розташована на підлозі.
                </Typography>
                <Divider />
                <Typography fontSize={25} fontWeight={700} color="text.primary">
                  Які тут зручності
                </Typography>
                <Grid container columnSpacing={30}>
                  <Grid>
                    <Typography
                      display={"flex"}
                      alignItems={"center"}
                      fontWeight={600}
                      gap={1}
                      color="text.secondary"
                    >
                      <FlatwareIcon /> Кухня
                    </Typography>
                  </Grid>
                  <Grid spacing={5}>
                    <Stack spacing={1.5}>
                      <Typography
                        display={"flex"}
                        alignItems={"center"}
                        fontWeight={600}
                        gap={1}
                        color="text.secondary"
                      >
                        <FlatwareIcon /> Wi-Fi
                      </Typography>
                      <Typography
                        display={"flex"}
                        alignItems={"center"}
                        fontWeight={600}
                        gap={1}
                        color="text.secondary"
                      >
                        <FlatwareIcon /> Безкоштовний вуличний паркінг
                      </Typography>{" "}
                      <Typography
                        display={"flex"}
                        alignItems={"center"}
                        fontWeight={600}
                        gap={1}
                        color="text.secondary"
                      >
                        <FlatwareIcon /> Можна залишити багаж
                      </Typography>{" "}
                      <Typography
                        display={"flex"}
                        alignItems={"center"}
                        fontWeight={600}
                        gap={1}
                        color="text.secondary"
                      >
                        <FlatwareIcon /> Холодильник
                      </Typography>{" "}
                      <Typography
                        display={"flex"}
                        alignItems={"center"}
                        fontWeight={600}
                        gap={1}
                        color="text.secondary"
                        sx={{
                          textDecoration: "line-through",
                        }}
                      >
                        <FlatwareIcon /> Детектор чадного газу
                      </Typography>
                    </Stack>
                  </Grid>
                  <PaperLikeButton>Показати всі зручності (1)</PaperLikeButton>
                </Grid>
                <Divider />
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
