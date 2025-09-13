import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import NavTabs from "./NavTabs";
import Filter from "./Filter";

export default function Header() {
  return (
    <>
      <Box
        justifyContent={"space-between"}
        px={5}
        py={3}
        borderBottom={"solid 2px"}
        borderColor={"custom.second"}
        backgroundColor={"custom.main"}
        sx={{
          display: "none",
          "@media (min-width:1000px)": {
            display: "flex",
          },
        }}
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

        <Filter />

        <Box display={"flex"} gap={2} paddingY={1}>
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
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={'center'}
        px={5}
        py={3}
        borderBottom={"solid 2px"}
        borderColor={"custom.second"}
        backgroundColor={"custom.main"}
        sx={{
          display: "flex",
          "@media (min-width:1000px)": {
            display: "none",
          },
        }}
      >
        <NavTabs/>
        <Filter/>
      </Box>
    </>
  );
}
