import { Stack, Typography } from "@mui/material";
import Map from "./Map";
import ShowMoreButton from "../ShowMoreButton";
import { pageData } from "../../pageData";

const { mapMarkerPosition, apartmentLocation, locationDescription } = pageData;

export default function LocationWithMapSection() {
  return (
    <Stack spacing={3}>
      <Typography color="text.primary" fontSize={24} fontWeight={700}>
        Де ви будете
      </Typography>
      <Map position={mapMarkerPosition} />
      <Typography color="text.primary" fontSize={20} fontWeight={700}>
        {apartmentLocation}
      </Typography>
      <Typography color="text.primary">
        {locationDescription.length >= 460
          ? `${locationDescription.slice(0, 460)}...`
          : locationDescription}
      </Typography>
      <ShowMoreButton href="" arrowed />
    </Stack>
  );
}
