import SectionWithSlider from "../../components/SectionWithSlider";
import { Box, Typography } from "@mui/material";
import Footer from "../../components/Footer";

export default function Services() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        px={"10vw"}
        gap={5}
        pb={5}
        minWidth={"100vh"}
        sx={{
          backgroundColor: "background.default",
          pt: { xs: "150px", md: "230px" },
        }}
      >
        <SectionWithSlider title="Шеф кухарі" />
        <SectionWithSlider title="Навчання" />
        <SectionWithSlider title="Масаж" />
      </Box>
    </>
  );
}
