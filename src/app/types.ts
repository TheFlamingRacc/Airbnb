import { DateRangeCalendarProps } from "@mui/x-date-pickers-pro";
import { RuleTypes } from "./rooms/components/MainRules";
import { AmenitieTypes } from "./rooms/components/Amenities";
import { Dayjs } from "dayjs";

export type DateRangeCalendarValue = [Dayjs | null, Dayjs | null];
export type DateRangeCalendarOnChange = (value: DateRangeCalendarValue) => void;
export type DateRangeCalendarPack = {
  value: DateRangeCalendarValue;
  setValue: DateRangeCalendarOnChange;
};

export type UserData = {
  icon?: string;
  name: string;
  time: string;
  rate: number;
  date: string;
  amount: string;
  message: string;
  id: number;
};

type RatingStatsType = Record<1 | 2 | 3 | 4 | 5, number>;

export type Rating = {
  clean: number;
  accuracy: number;
  arriving: number;
  communication: number;
  location: number;
  quality: number;
  stats: RatingStatsType;
};

export type OwnerType = {
  name: string;
  amount: number;
  iconUrl: null | string;
  allFeedbacks: number;
  averageRate: number;
  workingTimeAmount: number;
  profession: string;
  bestHobbie: string;
  shortDescription: string;
  isSuper: boolean;
  answerSpeedPercentage: number;
  answerInfo: string;
};

export type ImportantInfoBlock = {
  title: string;
  description: string[] | string;
};

type ImportantInfo = Record<1 | 2 | 3, ImportantInfoBlock>;

export type PageDataType = {
  apartmentTitle: string;
  apartmentLocation: string;
  apartmentDescription: string;
  details: string[];
  rate: number;
  feedbackAmount: number;
  guestChoise: boolean;
  owner: OwnerType;
  ruleTypes: RuleTypes[];
  additionalSubSectionText?: string;
  amenities: AmenitieTypes[];
  disableDates?: string[];
  price: number;
  rating: Rating;
  feedbacks: UserData[];
  importantInfo: ImportantInfo;
  mapMarkerPosition: [number, number];
  locationDescription: string;
};
