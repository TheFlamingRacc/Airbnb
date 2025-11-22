import SectionWithSlider from "../../components/SectionWithSlider";
import { mockSliderData } from "../layout";

export default function Services() {
  return (
    <>
      <SectionWithSlider title="Шеф кухарі" sliderData={mockSliderData} />
      <SectionWithSlider title="Навчання" sliderData={mockSliderData} />
      <SectionWithSlider title="Масаж" sliderData={mockSliderData} />
    </>
  );
}
