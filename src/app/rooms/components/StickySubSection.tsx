import { Box, Paper, Typography, Button } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

export default function StickySubSection() {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "320px" },
        position: "sticky",
        top: { xs: 0, sm: "140px" },
        alignSelf: "flex-start",
      }}
    >
      <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
        <Typography fontWeight={700} fontSize={28} mb={2}>
          / ніч
        </Typography>

        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <PeopleOutlineIcon />
          <Typography>2 гості</Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1} mb={3}>
          <Typography>Дати</Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            py: 1.5,
            fontWeight: 600,
            borderRadius: "99px",
            textTransform: "none",
          }}
        >
          Забронювати
        </Button>

        <Typography fontSize={12} color="text.secondary" mt={2}>
          Деякі дані відображаються мовою оригіналу.{" "}
          <Box
            component="span"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Показати оригінал
          </Box>
        </Typography>
      </Paper>
    </Box>
  );
}
