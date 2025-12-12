import { Box, Typography, Grid, Stack } from "@mui/material";
import Amenities, { AmenitieTypes } from "../Amenities";
import PaperLikeButton from "@/app/components/PaperLikeButton";

export default function Sec2SubSec6({
  amenities,
}: {
  amenities: AmenitieTypes[];
}) {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="text.primary">
        Які тут зручності
      </Typography>
      <Grid container columnSpacing={30} mt={2} mb={3}>
        <Grid>
          <Stack spacing={3}>
            {amenities.slice(0, 5).map((amenity, i) => (
              <Amenities key={i} type={amenity} />
            ))}
          </Stack>
        </Grid>
        <Grid spacing={5}>
          <Stack spacing={3}>
            {amenities.slice(5, 10).map((amenity, i) => (
              <Amenities key={i} type={amenity} />
            ))}
          </Stack>
        </Grid>
      </Grid>
      <PaperLikeButton>
        Показати всі зручності ({amenities.length})
      </PaperLikeButton>
    </Box>
  );
}
