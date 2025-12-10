"use client";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Divider,
  IconButton,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SecondaryButton from "./SecondaryButton";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function MenuIconButton() {
  const [open, setOpen] = useState(false);
  const clickHandle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Box position={"relative"}>
      <IconButton
        size="large"
        onClick={() => clickHandle()}
        sx={{
          backgroundColor: "background.paper",
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      {open && (
        <Box
          position="absolute"
          top="100%"
          width={300}
          right={0}
          mt={1}
          py={2}
          bgcolor="background.default"
          boxShadow={3}
          borderRadius={4}
          zIndex={10}
        >
          <Stack spacing={1}>
            <SecondaryButton fullWidth startIcon={<HelpOutlineIcon />}>
              Довідковий центр
            </SecondaryButton>
            <Divider />
            <SecondaryButton fullWidth>
              <Box>
                <Typography textAlign={"left"} fontWeight={700}>
                  Стати господарем
                </Typography>
                <Typography textAlign={"left"}>
                  Почати приймати гостей та отримувати додатковий дохід дуже
                  просто.
                </Typography>
              </Box>
            </SecondaryButton>
            <Divider />
            <SecondaryButton fullWidth>Запросити господаря</SecondaryButton>
            <SecondaryButton fullWidth>Стати співгосподарем</SecondaryButton>
            <Divider />
            <SecondaryButton fullWidth>
              Увійти або зареєструватись
            </SecondaryButton>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
