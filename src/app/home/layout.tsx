import { PropsWithChildren } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import { SliderSlideProps } from "../components/SliderSlide";

export const mockSliderData: SliderSlideProps[] = [
  {
    original: false,
    title: "Затишний будинок біля озера",
    description: "Від ₴3 734 для гостя",
    rate: 4.8,
    isPopular: true,
    imgUrl: "/SliderImage.png",
    id: 1,
  },
  {
    original: false,
    title: "Майстер-клас з гончарства",
    description: "Від ₴1 250 для гостя",
    rate: 4.9,
    isPopular: false,
    imgUrl: "/SliderImage.png",
    id: 1,
  },
  {
    original: false,
    title: "Персональний фотограф на день",
    description: "Від ₴2 100 для гостя",
    rate: 4.7,
    isPopular: true,
    imgUrl: "/SliderImage.png",
    id: 1,
  },
  {
    original: true,
    title: "Незвичайна підводна квартира",
    description: "Від ₴5 400 для гостя",
    rate: 4.9,
    isPopular: true,
    imgUrl: "/SliderImage.png",
    id: 1,
  },
  {
    original: false,
    title: "Апартаменти в центрі міста",
    description: "Від ₴2 850 для гостя",
    rate: 4.6,
    isPopular: false,
    imgUrl: "/SliderImage.png",
    id: 1,
  },
  {
    original: false,
    title: "Серфінг тур на вихідні",
    description: "Від ₴3 200 для гостя",
    rate: 4.8,
    isPopular: true,
    imgUrl: "/SliderImage.png",
    id: 1,
  },
  {
    original: false,
    title: "Йога заняття на свіжому повітрі",
    description: "Від ₴1 500 для гостя",
    rate: 4.5,
    isPopular: false,
    imgUrl: "/SliderImage.png",
    id: 1,
  },
  {
    original: true,
    title: "Дерев'яний будиночок на дереві",
    description: "Від ₴4 600 для гостя",
    rate: 4.9,
    isPopular: true,
    imgUrl: "/SliderImage.png",
    id: 1,
  },
];

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header withNavigation />
      <Box
        display={"flex"}
        flexDirection={"column"}
        px={{ xs: 1, md: "10vw" }}
        pb={5}
        gap={5}
        sx={{
          backgroundColor: "background.default",
          pt: 5,
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}
