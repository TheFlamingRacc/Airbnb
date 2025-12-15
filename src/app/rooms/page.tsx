import { Box, Divider, Stack } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import PhotosSection from "./components/PhotosSection";
import MainDescriptionSection from "./components/MainDescriptionSection";
import FeedbacksSection from "./components/FeedbacksSection";
import LocationWithMapSection from "./components/LocationWithMapSection";
import MeetOwnerSection from "./components/MeetOwnerSection";
import ImportantInfoSection from "./components/ImportantInfoSection";

export default function Rooms() {
  return (
    <>
      <Box>
        <Header withNavigation={false} />
        <Stack
          alignItems="center"
          px={5}
          pt={5}
          pb={10}
          sx={{
            backgroundColor: "background.default",
          }}
        >
          <Stack
            sx={{
              backgroundColor: "background.default",
              maxWidth: "1200px",
            }}
            spacing={2}
          >
            <PhotosSection />
            <Stack divider={<Divider />} spacing={2}>
              <MainDescriptionSection />
              <FeedbacksSection />
              <LocationWithMapSection />
              <MeetOwnerSection />
              <ImportantInfoSection />
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </>
  );
}
