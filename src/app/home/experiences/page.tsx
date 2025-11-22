import SectionWithSlider from "../../components/SectionWithSlider";
import { Typography } from "@mui/material";
import { mockSliderData } from "../layout";

export default function Experiences() {
  return (
    <>
      <SectionWithSlider title="Airbnb Original" sliderData={mockSliderData} />
      <Typography px={3} fontSize={30} fontWeight={700} color="text.primary">
        Популярне серед мандрівників із вашого регіону
      </Typography>
      <SectionWithSlider
        title="Варшава: враження"
        sliderData={mockSliderData}
      />
      <SectionWithSlider title="Краків: враження" sliderData={mockSliderData} />
      <SectionWithSlider
        title="Будапешт: враження"
        sliderData={mockSliderData}
      />
      <SectionWithSlider title="Париж: враження" sliderData={mockSliderData} />
      <SectionWithSlider title="Прага: враження" sliderData={mockSliderData} />
    </>
  );
}
