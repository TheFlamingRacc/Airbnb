"use client";

import { Box, Button, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ArrowForwardIos } from "@mui/icons-material";
import SliderSlide from "./SliderSlide";
import { SliderSlideProps } from "./SliderSlide";

export const sliderData: SliderSlideProps[] = [
  {
    type: "homes",
    title: "Затишний будинок біля озера",
    description: "Від ₴3 734 для гостя",
    rate: 4.8,
    isPopular: true,
  },
  {
    type: "experiences",
    title: "Майстер-клас з гончарства",
    description: "Від ₴1 250 для гостя",
    rate: 4.9,
    isPopular: false,
  },
  {
    type: "services",
    title: "Персональний фотограф на день",
    description: "Від ₴2 100 для гостя",
    rate: 4.7,
    isPopular: true,
  },
  {
    type: "original",
    title: "Незвичайна підводна квартира",
    description: "Від ₴5 400 для гостя",
    rate: 4.9,
    isPopular: true,
  },
  {
    type: "homes",
    title: "Апартаменти в центрі міста",
    description: "Від ₴2 850 для гостя",
    rate: 4.6,
    isPopular: false,
  },
  {
    type: "experiences",
    title: "Серфінг тур на вихідні",
    description: "Від ₴3 200 для гостя",
    rate: 4.8,
    isPopular: true,
  },
  {
    type: "services",
    title: "Йога заняття на свіжому повітрі",
    description: "Від ₴1 500 для гостя",
    rate: 4.5,
    isPopular: false,
  },
  {
    type: "original",
    title: "Дерев'яний будиночок на дереві",
    description: "Від ₴4 600 для гостя",
    rate: 4.9,
    isPopular: true,
  },
];

export default function SectionWithSlider({ title }: { title: string }) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <Box
      color="text.primary"
      margin={"auto"}
      px={2}
      maxWidth={1500}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography
          gap={1}
          fontSize={18}
          fontWeight={700}
          display={"flex"}
          alignItems={"center"}
        >
          {title} <ArrowForwardIos fontSize={"inherit"} />
        </Typography>
        <Box display="flex" justifyContent="center" gap={1}>
          <Button
            sx={{
              minWidth: "0",
              aspectRatio: "1",
              borderRadius: "50%",
              padding: 0.7,
            }}
            ref={prevRef}
            variant="outlined"
            disabled={isBeginning}
          >
            <ArrowBackIosNewIcon fontSize="inherit" />
          </Button>
          <Button
            sx={{
              minWidth: "0",
              aspectRatio: "1",
              padding: 0.7,
              borderRadius: "50%",
            }}
            ref={nextRef}
            variant="outlined"
            disabled={isEnd}
          >
            <ArrowForwardIos fontSize="inherit" />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          minWidth: 0,
        }}
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={7}
          breakpoints={{
            1550: { slidesPerView: 7 },
            1300: { slidesPerView: 6 },
            1050: { slidesPerView: 5 },
            850: { slidesPerView: 4 },
            650: { slidesPerView: 3 },
            0: { slidesPerView: 2.5 },
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();

            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onReachBeginning={() => setIsBeginning(true)}
          onReachEnd={() => setIsEnd(true)}
        >
          {sliderData.map((item, i) => (
            <SwiperSlide key={i}>
              <SliderSlide {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
