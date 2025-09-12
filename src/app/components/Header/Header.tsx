import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import NavTabs from "./NavTabs";

export default function Header() {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      px={5}
      py={3}
      borderBottom={"solid 2px"}
      borderColor={"custom.second"}
      backgroundColor={"custom.main"}
    >
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Box
          component="img"
          src={"/logos_airbnb-icon.svg"}
          sx={{
            width: "45px",
          }}
        />
        <Typography
          color="#FF9800"
          fontSize="30px"
          fontWeight="700"
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          airbnb
        </Typography>
      </Box>

      <NavTabs />

      <Box display={"flex"} gap={2}>
        <IconButton
          size="large"
          sx={{
            backgroundColor: "custom.second",
          }}
        >
          <LanguageIcon fontSize="large" />
        </IconButton>
        <IconButton
          size="large"
          sx={{
            backgroundColor: "custom.second",
          }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
}
