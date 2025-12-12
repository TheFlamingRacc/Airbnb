import { PropsWithChildren } from "react";
import { Avatar, Box, Stack } from "@mui/material";
export default function UserProfile({
  children,
  name,
  icon,
}: PropsWithChildren & { name: string; icon: null | string }) {
  return (
    <Box display={"flex"} gap={3}>
      <Avatar
        sx={{
          height: "50px",
          width: "50px",
        }}
        src={icon === null ? "" : icon}
      >
        {name.slice(0, 2).toUpperCase()}
      </Avatar>
      <Stack justifyContent={"space-between"}>{children}</Stack>
    </Box>
  );
}
