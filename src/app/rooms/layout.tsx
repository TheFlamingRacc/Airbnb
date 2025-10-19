import { Box, IconButton, Typography, Button } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import TranslateIcon from "@mui/icons-material/Translate";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function RoomsLayout() {
  return (
    <>
      <Header withNavigation={false} />
      <Box
        px={5}
        sx={{
          backgroundColor: "background.default",
          pt: { xs: "150px", md: "230px" },
        }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"}>
          <IconButton>
            <TranslateIcon />
          </IconButton>
          <Typography fontSize={25} fontWeight={700} color="text.primary">
            Апартаменти Scandi Group №18
          </Typography>
        </Box>
        <Box>
          <Button startIcon={<IosShareIcon />}>Поділитися</Button>
          <Button startIcon={<FavoriteBorderIcon />}>Зберегти</Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
