"use client";

import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import dayjs, { Dayjs } from "dayjs";

const tomorrow = dayjs().add(1, "day");

export default function DateRangePickerCalendar({
  disableDates,
  value,
  setValue,
}: {
  disableDates: string[];
  value: [Dayjs | null, Dayjs | null];
  setValue: (value: [Dayjs | null, Dayjs | null]) => void;
}) {
  const getClosestEndDate = (
    day: Dayjs,
    disabledDates: string[]
  ): Dayjs | undefined => {
    const formattedDay = day.format("YYYY/MM/DD");

    const sorted = [...disabledDates].sort();

    const found = sorted.find((targetDay) => targetDay > formattedDay);

    return found ? dayjs(found, "YYYY/MM/DD") : undefined;
  };

  return (
    <DateRangeCalendar
      sx={{
        color: "text.primary",
      }}
      value={value}
      onChange={(newValue) => setValue(newValue)}
      disablePast
      minDate={tomorrow}
      maxDate={
        value[0] === null
          ? undefined
          : getClosestEndDate(value[0], disableDates)
      }
      shouldDisableDate={(date: Dayjs) => {
        return disableDates.includes(date.format("YYYY/MM/DD"));
      }}
    />
  );
}
