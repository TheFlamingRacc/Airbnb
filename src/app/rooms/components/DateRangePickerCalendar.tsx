"use client";

import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import dayjs, { Dayjs } from "dayjs";
import { DateRangeCalendarPack, DateRangeCalendarValue } from "@/app/types";

const tomorrow = dayjs().add(1, "day");

const getClosestEndDate = (
  day: Dayjs,
  disabledDates: string[]
): Dayjs | undefined => {
  const formattedDay = day.format("YYYY/MM/DD");

  const sorted = [...disabledDates].sort();

  const found = sorted.find((targetDay) => targetDay > formattedDay);

  return found ? dayjs(found, "YYYY/MM/DD") : undefined;
};

type Props = DateRangeCalendarPack & {
  disableDates: string[];
};

export default function DateRangePickerCalendar({
  disableDates,
  value,
  setValue,
}: Props) {
  return (
    <DateRangeCalendar
      sx={{
        color: "text.primary",
      }}
      value={value}
      onChange={setValue}
      disablePast
      minDate={tomorrow}
      maxDate={
        value?.[0] ? getClosestEndDate(value[0], disableDates) : undefined
      }
      shouldDisableDate={(date: Dayjs) => {
        return disableDates.includes(date.format("YYYY/MM/DD"));
      }}
    />
  );
}
