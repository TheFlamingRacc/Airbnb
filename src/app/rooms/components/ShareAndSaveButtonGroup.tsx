import { Box, Button } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function ShareAndSaveButtonGroup() {
  return (
    <Box display={"flex"} gap={1}>
      <Button
        sx={{
          backgroundColor: "background.default",
          color: "text.primary",
          "&:hover": {
            backgroundColor: "background.paper",
          },
        }}
        startIcon={<IosShareIcon />}
      >
        Поділитися
      </Button>
      <Button
        sx={{
          backgroundColor: "background.default",
          color: "text.primary",
          "&:hover": {
            backgroundColor: "background.paper",
          },
        }}
        startIcon={<FavoriteBorderIcon />}
      >
        Зберегти
      </Button>
    </Box>
  );
}
