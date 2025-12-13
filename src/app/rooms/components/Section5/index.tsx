import { Stack, Typography } from "@mui/material";
import Map from "./Map";
import ShowMoreButton from "../ShowMoreButton";

export default function Section5({
  position,
  location,
  locationDescription,
}: {
  position: [number, number];
  location: string;
  locationDescription: string;
}) {
  return (
    <Stack spacing={3}>
      <Typography color="text.primary" fontSize={24} fontWeight={700}>
        Де ви будете
      </Typography>
      <Map position={position} />
      <Typography color="text.primary" fontSize={20} fontWeight={700}>
        {location}
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
