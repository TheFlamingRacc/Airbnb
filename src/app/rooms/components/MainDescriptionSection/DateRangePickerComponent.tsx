import { Box, Typography, IconButton, Button } from "@mui/material";
import DateRangePickerCalendar from "../DateRangePickerCalendar";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { DateRangeCalendarPack, PageDataType } from "@/app/types";

type Props = DateRangeCalendarPack &
  Pick<PageDataType, "apartmentLocation" | "disableDates">;

export default function DateRangePickerComponent({
  value,
  apartmentLocation,
  disableDates,
  setValue,
}: Props) {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="text.primary">
        {value[0] === null
          ? "Виберіть дату в'їзду"
          : value[1] === null
          ? "Виберіть дату виїзду"
          : `${apartmentLocation}: ${value[1]
              .startOf("day")
              .diff(value[0].startOf("day"), "day")} ночі`}
      </Typography>
      <Typography color="text.secondary" alignItems={"center"} display={"flex"}>
        {value[0] !== null && value[1] !== null
          ? `${value[0]} - ${value[1]}`
          : "Щоб переглянути точну ціну, вкажіть дати подорожі"}
      </Typography>
      <DateRangePickerCalendar
        value={value}
        setValue={setValue}
        disableDates={disableDates || []}
      />
      <Box display={"flex"} justifyContent={"space-between"}>
        <IconButton>
          <KeyboardIcon />
        </IconButton>
        <Button
          sx={{
            color: "text.primary",
            textDecoration: "underline",
            textTransform: "none",
            "&:hover": {
              fontWeight: 600,
              textDecoration: "underline !important",
            },
          }}
          onClick={() => setValue([null, null])}
        >
          Очистити дати
        </Button>
      </Box>
    </Box>
  );
}
