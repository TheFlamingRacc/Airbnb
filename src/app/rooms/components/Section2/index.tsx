"use client";
import { useState } from "react";
import { Stack, Typography, Divider, Box, Paper, Grid } from "@mui/material";
import StickySubSection from "../StickySubSection";
import Link from "next/link";
import { Dayjs } from "dayjs";
import MainRules, { RuleTypes } from "../MainRules";
import { AmenitieTypes } from "../Amenities";
import Sec2Subsec1 from "./Sec2Subsec1";
import UserProfile from "../UserProfile";
import Sec2SubSec7 from "./Sec2Subsec7";
import Sec2SubSec6 from "./Sec2SubSec6";

export default function Section2({
  apartmentDescription,
  details,
  rate,
  feedbackAmount,
  ownerIcon,
  ownerName,
  ownerAmount,
  ruleTypes,
  additionalSubSectionText,
  amenities,
  price,
  apartmentLocation,
  disableDates,
}: {
  apartmentDescription: string;
  details: string[];
  rate: number;
  feedbackAmount: number;
  ownerIcon: null | string;
  ownerName: string;
  ownerAmount: number;
  ruleTypes: RuleTypes[];
  additionalSubSectionText?: string;
  amenities: AmenitieTypes[];
  price: number;
  apartmentLocation: string;
  disableDates?: string[];
}) {
  const [dateValue, setDateValue] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent={"space-between"}
    >
      <Stack spacing={2} width={"60%"} divider={<Divider />}>
        <Sec2Subsec1
          rate={rate}
          apartmentDescription={apartmentDescription}
          details={details}
          feedbackAmount={feedbackAmount}
        />

        <UserProfile name={ownerName} icon={ownerIcon}>
          <Typography fontWeight={600} color="text.primary">
            Господар: {ownerName}
          </Typography>
          <Typography color="text.secondary">
            {ownerAmount > 4
              ? `Супергосподар • Приймає гостей протягом ${ownerAmount} років`
              : `Приймає гостей протягом ${ownerAmount} років`}
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

        <Sec2SubSec6 amenities={amenities} />

        <Sec2SubSec7
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
