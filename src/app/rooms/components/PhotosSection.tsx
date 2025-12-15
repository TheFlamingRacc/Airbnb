import { Box, IconButton, Typography } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import ImagesList from "./ImagesList";
import ShareAndSaveButtonGroup from "./ShareAndSaveButtonGroup";
import { pageData } from "../pageData";

const { apartmentTitle } = pageData;

export default function PhotosSection() {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"}>
          <IconButton>
            <TranslateIcon />
          </IconButton>
          <Typography fontSize={25} fontWeight={700} color="text.primary">
            {apartmentTitle}
          </Typography>
        </Box>
        <ShareAndSaveButtonGroup />
      </Box>
      <ImagesList />
    </>
  );
}
