import { Box, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";

export type SliderSlideProps = {
  type: "homes" | "experiences" | "services" | "original";
  title: string;
  description: string;
  rate: number;
  isPopular: boolean;
  additionalDescription?: string;
};

export default function SliderSlide({
  type,
  title,
  description,
  rate,
  isPopular,
}: SliderSlideProps) {
  return (
    <Box color="text.primary" display={"flex"} flexDirection={"column"} gap={1}>
      <Box
        sx={{
          width: "100%",
          aspectRatio: "1",
          backgroundColor: "red",
          position: "relative",
          backgroundImage: 'url("/SliderImage.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        borderRadius={6}
        padding={1}
      >
        <Box fontSize={15} display={"flex"} justifyContent={"space-between"}>
          <Box
            display={isPopular ? "block" : "none"}
            borderRadius={5}
            py={1}
            px={2}
            sx={{
              backgroundColor: "background.default",
            }}
          >
            <Typography fontWeight={600}>
              {type === "homes"
                ? "Вибір гостей"
                : type === "experiences"
                ? "Популярне"
                : type === "services"
                ? "Популярно"
                : "Original"}
            </Typography>
          </Box>
          <IconButton
            sx={{
              marginLeft: "auto",
            }}
          >
            <FavoriteBorderIcon fontSize="inherit" />
          </IconButton>
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
        {description} · <StarIcon fontSize="inherit" />
        {rate}
      </Typography>
    </Box>
  );
}
