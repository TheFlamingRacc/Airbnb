import SectionWithSlider from "../../components/SectionWithSlider";
import { Box, Typography } from "@mui/material";
import Footer from "../../components/Footer";

export default function Experiences() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        px={"10vw"}
        pb={5}
        gap={5}
        minWidth={"100vh"}
        sx={{
          backgroundColor: "background.default",
          pt: { xs: "150px", md: "230px" },
        }}
      >
        <SectionWithSlider title="Airbnb Original" />
        <Typography px={3} fontSize={30} fontWeight={700} color="text.primary">
          Популярне серед мандрівників із вашого регіону
        </Typography>
        <SectionWithSlider title="Варшава: враження" />
        <SectionWithSlider title="Краків: враження" />
        <SectionWithSlider title="Будапешт: враження" />
        <SectionWithSlider title="Париж: враження" />
        <SectionWithSlider title="Прага: враження" />
      </Box>
    </>
  );
}
