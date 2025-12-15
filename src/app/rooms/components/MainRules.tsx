import { Box, Stack, Typography } from "@mui/material";
import WavingHandOutlinedIcon from "@mui/icons-material/WavingHandOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const ruleTypes = {
  sharedBathroom: {
    title: "Спільна ванна кімната",
    desc: "Ви користуватиметеся ванною кімнатою спільно з іншими людьми.",
  },
  commonRoom: {
    title: "Приміщення спільного користування",
    desc: "Деякі приміщення в помешканні використовуватимуться спільно з іншими гостями.",
  },
  multiplePeople: {
    title: "Спільна кімната",
    desc: "Окрім вас, кімнату можуть використовувати інші люди.",
  },
};

const iconProps = {
  height: "50px",
  width: "50px",
  color: "text.primary",
};

function getIcon(type: string) {
  switch (type) {
    case "sharedBathroom":
      return <ShowerOutlinedIcon sx={iconProps} />;
    case "commonRoom":
      return <WavingHandOutlinedIcon sx={iconProps} />;
    case "multiplePeople":
      return <PeopleOutlineIcon sx={iconProps} />;
    default:
      return null;
  }
}

export type RuleTypes = keyof typeof ruleTypes;

type Props = {
  ruleType: RuleTypes;
};

export default function MainRules({ ruleType }: Props) {
  return (
    <Box display={"flex"} gap={3}>
      {getIcon(ruleType)}
      <Stack justifyContent={"space-between"}>
        <Typography fontWeight={600} color="text.primary">
          {ruleTypes[ruleType].title}
        </Typography>
        <Typography color="text.secondary">
          {ruleTypes[ruleType].desc}
        </Typography>
      </Stack>
    </Box>
  );
}
