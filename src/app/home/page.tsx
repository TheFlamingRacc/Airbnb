import { Box } from "@mui/material";
import Footer from "../components/Footer";
import SectionWithSlider from "../components/SectionWithSlider";

export default function Home() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        minWidth={"100vh"}
        sx={{
          backgroundColor: "background.default",
          pt: { xs: "150px", md: "230px" },
        }}
      >
        <SectionWithSlider title="Популярні помешкання в місті Одеська область" />
        <SectionWithSlider title="Помешкання, вільні на ці вихідні, у місті Київ" />
        <SectionWithSlider title="Перебування у місті Варшава" />
        <SectionWithSlider title="Помешкання, вільні наступного місяця, у місті Львівська область" />
        <SectionWithSlider title="Помешкання у місті Кишинів" />
        <SectionWithSlider title="Помешкання, вільні наступного місяця, у місті Краків" />
        <SectionWithSlider title="Помешкання у місті Будапешт" />
        <SectionWithSlider title="Перегляньте помешкання у місті Париж" />
        <SectionWithSlider title="Популярні помешкання в місті Прага" />
        <SectionWithSlider title="Перебування в місті Бухарест" />
      </Box>
    </>
  );
}
