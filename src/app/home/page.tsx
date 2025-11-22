import SectionWithSlider from "../components/SectionWithSlider";
import { mockSliderData } from "./layout";

export default function Home() {
  return (
    <>
      <SectionWithSlider
        title="Популярні помешкання в місті Одеська область"
        sliderData={mockSliderData}
      />
      <SectionWithSlider
        title="Помешкання, вільні на ці вихідні, у місті Київ"
        sliderData={mockSliderData}
      />
      <SectionWithSlider
        title="Перебування у місті Варшава"
        sliderData={mockSliderData}
      />
      <SectionWithSlider
        title="Помешкання, вільні наступного місяця, у місті Львівська область"
        sliderData={mockSliderData}
      />
      <SectionWithSlider
        title="Помешкання у місті Кишинів"
        sliderData={mockSliderData}
      />
      <SectionWithSlider
        title="Помешкання, вільні наступного місяця, у місті Краків"
        sliderData={mockSliderData}
      />
      <SectionWithSlider
        title="Помешкання у місті Будапешт"
        sliderData={mockSliderData}
      />
      <SectionWithSlider
        title="Перегляньте помешкання у місті Париж"
        sliderData={mockSliderData}
      />
      <SectionWithSlider
        title="Популярні помешкання в місті Прага"
        sliderData={mockSliderData}
      />
      <SectionWithSlider
        title="Перебування в місті Бухарест"
        sliderData={mockSliderData}
      />
    </>
  );
}
