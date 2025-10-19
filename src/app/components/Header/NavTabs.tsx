"use client";

import { Box, Tabs, Tab } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";

export default function NavTabs() {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    router.push(newValue);
  };
  return (
    <Tabs value={pathname} role="navigation" onChange={handleChange}>
      <Tab
        icon={<HomeIcon />}
        iconPosition="start"
        value="/home"
        label="Помешкання"
      />
      <Tab
        icon={<RoomServiceIcon />}
        iconPosition="start"
        value="/home/experiences"
        label="Враження"
      />
      <Tab
        icon={<LocalAirportIcon />}
        iconPosition="start"
        value="/home/services"
        label="Послуги"
      />
    </Tabs>
  );
}
