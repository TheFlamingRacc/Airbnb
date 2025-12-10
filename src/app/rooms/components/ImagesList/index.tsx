"use client";

import { ImageList, ImageListItem } from "@mui/material";
import { useState } from "react";
import ShowAllPhotosButton from "./ShowAllPhotosButton";
import PhotoShowRoom from "./PhotoShowRoom";

export default function ImagesList() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
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
        <ImageListItem cols={2} rows={2}>
          <img src="./SliderImage.png" />
        </ImageListItem>
        <ImageListItem>
          <img src="./SliderImage.png" />
        </ImageListItem>
        <ImageListItem>
          <img src="./SliderImage.png" />
        </ImageListItem>
        <ImageListItem>
          <img src="./SliderImage.png" />
        </ImageListItem>
        <ImageListItem>
          <img src="./SliderImage.png" />
        </ImageListItem>
        <ShowAllPhotosButton onClick={() => handleOpen()} />
      </ImageList>
      <PhotoShowRoom open={open} handleClose={handleClose} />
    </>
  );
}
