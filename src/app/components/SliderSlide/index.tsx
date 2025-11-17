import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { usePathname } from "next/navigation";
import PopularChip from "./PopularChip";
import LikeButton from "./LikeButton";
import Rating from "./Rating";

export type SliderSlideProps = {
  original: boolean;
  title: string;
  description: string;
  rate: number;
  isPopular: boolean;
  imgUrl: string;
};

export default function SliderSlide({
  title,
  original = false,
  description,
  rate,
  isPopular,
  imgUrl,
}: SliderSlideProps) {
  const pathname = usePathname();
  return (
    <Box color="text.primary" display={"flex"} flexDirection={"column"} gap={1}>
      <Box
        sx={{
          width: "100%",
          aspectRatio: "1",
          position: "relative",
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        borderRadius={6}
        padding={1}
      >
        <Box
          display={"flex"}
          justifyContent={isPopular ? "space-between" : "flex-end"}
        >
          {isPopular && (
            <PopularChip
              label={
                original
                  ? "Original"
                  : pathname === "/home"
                  ? "Вибір гостей"
                  : pathname === "/home/experiences"
                  ? "Популярне"
                  : pathname === "/home/services"
                  ? "Популярно"
                  : ""
              }
            />
          )}
          <LikeButton />
        </Box>
      </Box>
      <Typography fontSize={15} fontWeight={700}>
        {title}
      </Typography>
      <Typography
        display={"flex"}
        alignItems={"center"}
        flexWrap={"wrap"}
        sx={{
          opacity: "0.7",
        }}
      >
        {description} · <Rating> {rate}</Rating>
      </Typography>
    </Box>
  );
}
