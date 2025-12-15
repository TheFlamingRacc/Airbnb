import { PropsWithChildren } from "react";
import { Avatar, Box, Stack } from "@mui/material";

type Props = PropsWithChildren & {
  name: string;
  icon: null | string;
};
export default function UserProfile({ children, name, icon }: Props) {
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
