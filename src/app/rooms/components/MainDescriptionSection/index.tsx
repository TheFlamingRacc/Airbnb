"use client";
import { useState } from "react";
import { Stack, Typography, Divider, Paper } from "@mui/material";
import StickySubSection from "../StickySubSection";
import Link from "next/link";
import MainRules from "../MainRules";
import MainInfoComponent from "./MainInfoComponent";
import UserProfile from "../UserProfile";
import AmenitiesComponent from "./AmenitiesComponent";
import { pageData } from "../../pageData";
import { DateRangeCalendarValue } from "@/app/types";
import DateRangePickerComponent from "./DateRangePickerComponent";

const {
  apartmentDescription,
  details,
  rate,
  feedbackAmount,
  owner,
  ruleTypes,
  additionalSubSectionText,
  amenities,
  price,
  apartmentLocation,
  disableDates,
} = pageData;

export default function MainDescriptionSection() {
  const [dateValue, setDateValue] = useState<DateRangeCalendarValue>([
    null,
    null,
  ]);
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent={"space-between"}
    >
      <Stack spacing={2} width={"60%"} divider={<Divider />}>
        <MainInfoComponent
          rate={rate}
          apartmentDescription={apartmentDescription}
          details={details}
          feedbackAmount={feedbackAmount}
        />

        <UserProfile name={owner.name} icon={owner.iconUrl}>
          <Typography fontWeight={600} color="text.primary">
            Господар: {owner.name}
          </Typography>
          <Typography color="text.secondary">
            {owner.amount > 4
              ? `Супергосподар • Приймає гостей протягом ${owner.amount} років`
              : `Приймає гостей протягом ${owner.amount} років`}
          </Typography>
        </UserProfile>

        <Stack spacing={2}>
          {ruleTypes.map((rule, i) => (
            <MainRules key={i} ruleType={rule} />
          ))}
        </Stack>

        <Paper
          sx={{
            p: 2,
          }}
        >
          <Typography color="text.secondary">
            Деякі дані відображаються мовою оригіналу.{" "}
            <Link style={{ textDecoration: "underline" }} href={""}>
              Показати оригінал
            </Link>
          </Typography>
        </Paper>

        {additionalSubSectionText && (
          <Typography color="text.primary">
            {additionalSubSectionText}
          </Typography>
        )}

        <AmenitiesComponent amenities={amenities} />

        <DateRangePickerComponent
          value={dateValue}
          setValue={setDateValue}
          apartmentLocation={apartmentLocation}
          disableDates={disableDates}
        />
      </Stack>
      <StickySubSection
        value={dateValue}
        setValue={setDateValue}
        price={price}
      />
    </Stack>
  );
}
