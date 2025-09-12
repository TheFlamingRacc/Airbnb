import { Box, Typography, Button, Divider, Grid, Link } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ToggleTheme from "./ToggleTheme";
import { ArrowForwardIos, X } from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      backgroundColor={"custom.second"}
      color="text.primary"
      sx={{
        padding: "4vw 2vw",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "600",
        }}
      >
        Ідеї для майбутніх поїздок
      </Typography>
      <Divider
        sx={{
          my: 2,
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mx: -2,
          mt: 3,
          mb: 9,
        }}
      >
        <ArrowBackIosNewIcon />
        <ArrowForwardIos />
      </Box>
      <Grid container direction={{ xs: "column", md: "row" }} spacing={3}>
        <Grid size="grow">
          <Typography
            sx={{
              fontWeight: "550",
              fontSize: "1.2rem",
            }}
          >
            Підтримка
          </Typography>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            Довідковий центр
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            AirCover
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            Протидія дискримінації
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            Підтримка людей з інвалідністю
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            Варіанти скасування бронювань
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            Надіслати скаргу від сусідів
          </Link>
        </Grid>
        <Divider
          sx={{
            my: 2,
            display: { md: "none", xs: "block" },
          }}
        />
        <Grid size="grow">
          <Typography
            sx={{
              fontWeight: "550",
              fontSize: "1.2rem",
            }}
          >
            Прийом гостей
          </Typography>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            Перетворити помешкання на Airbnb
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            AirCover для господарів
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            Ресурси про прийом гостей
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            Форум спільноти
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            Відповідальний прийом гостей
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            Приєднатися до безкоштовного уроку з прийому гостей
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            Пошук співгосподаря
          </Link>
        </Grid>
        <Divider
          sx={{
            my: 2,
            display: { md: "none", xs: "block" },
          }}
        />
        <Grid size="grow">
          <Typography
            sx={{
              fontWeight: "550",
              fontSize: "1.2rem",
            }}
          >
            Airbnb
          </Typography>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            Новини
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            Вакансії
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            Інвестори
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
              mt: 3,
            }}
          >
            Тимчасове житло від Airbnb.org
          </Link>
        </Grid>
      </Grid>
      <Divider
        sx={{
          my: 2,
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            md: "row",
            xs: "column",
          },
        }}
      >
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <Typography fontSize={"1.2rem"}>© 2025 Airbnb, Inc.</Typography>
          <Typography>·</Typography>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
            }}
          >
            Конфіденційність
          </Link>
          <Typography>·</Typography>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
            }}
          >
            Умови
          </Link>
          <Typography>·</Typography>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
            }}
          >
            Мапа сайту
          </Link>
        </Box>
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <ToggleTheme />

          <Link
            underline="none"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
            }}
          >
            <Box display={"flex"} alignItems={"center"}>
              <LanguageIcon /> Українська (UA)
            </Box>
          </Link>
          <Link
            underline="none"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "block",
            }}
          >
            <Box display={"flex"} alignItems={"center"}>
              <AttachMoneyIcon /> UAH
            </Box>
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "flex",
            }}
          >
            <FacebookIcon />
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "flex",
            }}
          >
            <XIcon />
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/"
            sx={{
              fontSize: "1.2rem",
              display: "flex",
            }}
          >
            <InstagramIcon />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
