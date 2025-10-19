import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import NavTabs from "./NavTabs";
import Filter from "./Filter";

export default function Header({
  withNavigation,
}: {
  withNavigation: boolean;
}) {
  return (
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100%"
        zIndex={1100}
        justifyContent={"space-between"}
        px={5}
        py={3}
        borderBottom={"solid 2px"}
        borderColor={"background.paper"}
        flexDirection={"column"}
        display={{
          xs: "none",
          md: "flex",
        }}
        sx={{
          backgroundColor: "background.default",
        }}
        alignItems={"center"}
      >
        <Box display={"flex"} justifyContent={"space-between"} width="100%">
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

          {withNavigation ? <NavTabs /> : <Filter />}
          <Box display={"flex"} gap={2} paddingY={1}>
            <IconButton
              size="large"
              sx={{
                backgroundColor: "background.paper",
              }}
            >
              <LanguageIcon fontSize="large" />
            </IconButton>
            <IconButton
              size="large"
              sx={{
                backgroundColor: "background.paper",
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
        {withNavigation ? <Filter /> : ""}
      </Box>
      <Box
        flexDirection={"column"}
        alignItems={"center"}
        px={5}
        py={3}
        borderBottom={"solid 2px"}
        borderColor={"background.paper"}
        display={{
          xs: "flex",
          md: "none",
        }}
        sx={{
          backgroundColor: "background.default",
        }}
      >
        {withNavigation ? <NavTabs /> : ""}
        <Filter />
      </Box>
    </>
  );
}
