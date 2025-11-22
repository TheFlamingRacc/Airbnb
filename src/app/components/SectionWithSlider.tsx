"use client";

import { Box, Button, Skeleton, Typography } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ArrowForwardIos } from "@mui/icons-material";
import SliderSlide, { SliderSlideProps } from "./SliderSlide";

export default function SectionWithSlider({
  title,
  sliderData,
}: {
  title: string;
  sliderData: SliderSlideProps[];
}) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box
      color="text.primary"
      margin={"auto"}
      px={2}
      width={"100%"}
      maxWidth={1500}
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography
          gap={1}
          fontSize={{ xs: 12, sm: 18 }}
          fontWeight={700}
          display={"flex"}
          alignItems={"center"}
          flexWrap={"wrap"}
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

      <Box maxWidth={"100vw"}>
        {isClient ? (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={7}
            observeParents={true}
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
        ) : (
          <Box display="flex" gap={2}>
            {Array.from({ length: 7 }).map((_, i) => (
              <Skeleton
                key={i}
                variant="rounded"
                width={200}
                height={230}
                sx={{ borderRadius: 3 }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
