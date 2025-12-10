"use client";

import { Button, ButtonProps } from "@mui/material";
import { PropsWithChildren } from "react";

export default function SecondaryButton({
  children,
  ...props
}: ButtonProps & PropsWithChildren) {
  return (
    <Button
      sx={{
        color: "text.primary",
        px: 3,
        textTransform: "none",
        justifyContent: "flex-start !important",
        "&:hover": {
          backgroundColor: "background.paper",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
