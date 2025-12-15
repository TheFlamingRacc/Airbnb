import { Box, Typography } from "@mui/material";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HotTubIcon from "@mui/icons-material/HotTub";
import FlatwareIcon from "@mui/icons-material/Flatware";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import IronIcon from "@mui/icons-material/Iron";
import TvIcon from "@mui/icons-material/Tv";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WifiIcon from "@mui/icons-material/Wifi";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import KitchenIcon from "@mui/icons-material/Kitchen";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import WorkIcon from "@mui/icons-material/Work";
import { JSX } from "react";

const amenitieTypes = {
  bath: "Ванна",
  hotWater: "Гаряча вода",
  kitchen: "Кухня",
  dishes: "Посуд",
  wifi: "Wi-Fi",
  parking: "Безкоштовний вуличний паркінг",
  luggage: "Можна залишити багаж",
  refridgerator: "Холодильний",
  conditioner: "Кондиціонер",
  longLive: "Дозволено довготривале перебування",
  hangers: "Вішаки",
  iron: "Праска",
  tv: "Телевізор",
  heating: "Центральне опалення",
  heater: "Обігрівач",
  independentArrival: "Самостійне прибуття",
};

export type AmenitieTypes = keyof typeof amenitieTypes;

const iconsMap: Record<AmenitieTypes, JSX.Element> = {
  bath: <BathtubIcon />,
  hotWater: <HotTubIcon />,
  kitchen: <FlatwareIcon />,
  dishes: <FlatwareIcon />,
  wifi: <WifiIcon />,
  parking: <LocalParkingIcon />,
  luggage: <WorkIcon />,
  refridgerator: <KitchenIcon />,
  conditioner: <AcUnitIcon />,
  longLive: <CalendarMonthIcon />,
  hangers: <CheckroomIcon />,
  iron: <IronIcon />,
  tv: <TvIcon />,
  heating: <ThermostatIcon />,
  heater: <ThermostatIcon />,
  independentArrival: <VpnKeyIcon />,
};

function getIcon(amenitieType: AmenitieTypes) {
  return iconsMap[amenitieType];
}

type Props = {
  type: AmenitieTypes;
};

export default function Amenities({ type }: Props) {
  return (
    <Typography
      display={"flex"}
      alignItems={"center"}
      fontWeight={600}
      gap={1}
      color="text.secondary"
    >
      {getIcon(type)} {amenitieTypes[type]}
    </Typography>
  );
}
