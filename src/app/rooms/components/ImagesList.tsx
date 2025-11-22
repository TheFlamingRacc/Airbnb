import { ImageList, ImageListItem, Button } from "@mui/material";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";

export default function ImagesList() {
  return (
    <ImageList
      sx={{
        width: "100%",
        aspectRatio: "2/1",
        overflow: "hidden",
        borderRadius: "20px",
        position: "relative",
      }}
      variant="quilted"
      gap={10}
      cols={4}
    >
      {/* Головна велика картинка */}
      <ImageListItem cols={2} rows={2}>
        <img
          src="./SliderImage.png"
          alt=""
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageListItem>

      {/* Інші 4 менші поруч */}
      <ImageListItem>
        <img
          src="./SliderImage.png"
          alt=""
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src="./SliderImage.png"
          alt=""
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src="./SliderImage.png"
          alt=""
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src="./SliderImage.png"
          alt=""
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </ImageListItem>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          bottom: "25px",
          right: "25px",
          backgroundColor: "background.default",
          border: "solid 1px",
          borderRadius: "10px",
          borderColor: "text.primary",
          color: "text.primary",
          "&:hover": {
            backgroundColor: "grey.200",
          },
        }}
        startIcon={<AppsRoundedIcon />}
      >
        Показати всі фотографії
      </Button>
    </ImageList>
  );
}
