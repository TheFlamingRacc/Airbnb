"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  ClickAwayListener,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CustomIconButton from "../CustomIconButton";

export default function Filter() {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const places = [
    {
      name: "Львів, Львівська область",
      desc: "Першокласні ресторани",
      src: "/filter-image2.png",
    },
    {
      name: "Київ, Київська область",
      desc: "Історичні пам’ятки",
      src: "/filter-image3.png",
    },
    {
      name: "Одеса, Одеська область",
      desc: "Морські пляжі",
      src: "/filter-image1.png",
    },
    {
      name: "Харків, Харківська область",
      desc: "Сучасні парки",
      src: "/filter-image4.png",
    },
    {
      name: "Дніпро, Дніпропетровська область",
      desc: "Річкові прогулянки",
      src: "/filter-image2.png",
    },
    {
      name: "Запоріжжя, Запорізька область",
      desc: "Козацька історія",
      src: "/filter-image3.png",
    },
    {
      name: "Івано-Франківськ, Івано-Франківська область",
      desc: "Карпатські краєвиди",
      src: "/filter-image1.png",
    },
    {
      name: "Ужгород, Закарпатська область",
      desc: "Затишні кав’ярні",
      src: "/filter-image4.png",
    },
    {
      name: "Чернівці, Чернівецька область",
      desc: "Архітектурна спадщина",
      src: "/filter-image2.png",
    },
    {
      name: "Полтава, Полтавська область",
      desc: "Класична кухня",
      src: "/filter-image1.png",
    },
    {
      name: "Тернопіль, Тернопільська область",
      desc: "Озерні види",
      src: "/filter-image3.png",
    },
    {
      name: "Рівне, Рівненська область",
      desc: "Природні пам’ятки",
      src: "/filter-image4.png",
    },
    {
      name: "Луцьк, Волинська область",
      desc: "Старовинні замки",
      src: "/filter-image2.png",
    },
    {
      name: "Житомир, Житомирська область",
      desc: "Еко-маршрути",
      src: "/filter-image1.png",
    },
    {
      name: "Черкаси, Черкаська область",
      desc: "Дніпрові пейзажі",
      src: "/filter-image3.png",
    },
    {
      name: "Кропивницький, Кіровоградська область",
      desc: "Театральне мистецтво",
      src: "/filter-image4.png",
    },
    {
      name: "Миколаїв, Миколаївська область",
      desc: "Морські прогулянки",
      src: "/filter-image2.png",
    },
    {
      name: "Херсон, Херсонська область",
      desc: "Дунайські лимани",
      src: "/filter-image1.png",
    },
    {
      name: "Суми, Сумська область",
      desc: "Зелені парки",
      src: "/filter-image3.png",
    },
    {
      name: "Чернігів, Чернігівська область",
      desc: "Стародавні храми",
      src: "/filter-image4.png",
    },
  ];

  const handleSearch = () => {
    console.log("Пошук:", value);
  };

  const handleSelect = (place: string) => {
    setValue(place);
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box
        position="relative"
        display="flex"
        m={1}
        width={{
          xs: "100%",
          md: "70%",
        }}
      >
        <TextField
          fullWidth
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          label="Куди?"
          variant="outlined"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment
                  sx={{
                    position: "relative",
                    zIndex: 2,
                  }}
                  position="end"
                >
                  <CustomIconButton
                    variant="contained"
                    color="primary"
                    onClick={handleSearch}
                    sx={{
                      border: "solid 2px primary",
                    }}
                  >
                    <SearchIcon fontSize="medium" />
                  </CustomIconButton>
                  {/* <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSearch}
                  >
                    <SearchIcon fontSize="medium" />
                  </Button> */}
                </InputAdornment>
              ),
            },
          }}
          sx={{ flex: 1 }}
        />

        {open && (
          <Box
            position="absolute"
            top="100%"
            width={400}
            p={3}
            right={0}
            mt={1}
            bgcolor="background.paper"
            boxShadow={3}
            borderRadius={10}
            zIndex={10}
            maxHeight={400}
            sx={{
              overflowY: "auto",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Typography margin={3} fontWeight={700} color="text.primary">
              Рекомендовані напрямки
            </Typography>
            {places
              .filter((p) => p.name.toLowerCase().includes(value.toLowerCase()))
              .map((place) => (
                <Box
                  key={place.name}
                  display={"flex"}
                  p={1.5}
                  borderRadius={5}
                  gap={3}
                  sx={{
                    cursor: "pointer",
                    height: "85px",
                    "&:hover": { bgcolor: "background.paper" },
                  }}
                  onClick={() => handleSelect(place.name)}
                >
                  <Box
                    sx={{
                      height: "100%",
                    }}
                    component={"img"}
                    src={place.src}
                  />
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography fontWeight={700} color="text.primary">
                      {place.name}
                    </Typography>
                    <Typography color="text.primary">{place.desc}</Typography>
                  </Box>
                </Box>
              ))}
          </Box>
        )}
      </Box>
    </ClickAwayListener>
  );
}
