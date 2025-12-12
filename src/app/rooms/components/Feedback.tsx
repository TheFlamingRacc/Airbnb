import { Avatar, Stack, Typography, Box, Rating } from "@mui/material";
import UserProfile from "./UserProfile";

export default function Feedback({
  avatar = false,
  name,
  desc,
  rate,
  date,
  amount,
  message,
}: {
  avatar?: false | string;
  name: string;
  desc: string;
  rate: number;
  date: string;
  amount: string;
  message: string;
}) {
  return (
    <Stack spacing={1} maxWidth={500}>
      <UserProfile name={name} icon={avatar || null}>
        <Typography fontWeight={600} color="text.primary">
          {name}
        </Typography>
        <Typography color="text.secondary">{desc}</Typography>
      </UserProfile>
      <Stack
        direction={"row"}
        gap={1}
        divider={
          <Typography fontSize={13} color="text.secondary">
            •
          </Typography>
        }
      >
        <Rating size="small" readOnly value={rate} />
        <Typography fontSize={13} color="text.primary" fontWeight={600}>
          {date}
        </Typography>
        <Typography fontSize={13} color="text.secondary">
          Перебування: {amount}
        </Typography>
      </Stack>
      <Typography fontSize={14} color="text.primary">
        {message.length >= 160 ? `${message.slice(0, 160)}...` : message}
      </Typography>
      <Typography
        component={"a"}
        fontWeight={600}
        color="text.secondary"
        sx={{
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Показати більше
      </Typography>
    </Stack>
  );
}
