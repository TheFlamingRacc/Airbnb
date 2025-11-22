import { Button, ButtonProps } from "@mui/material";
import { PropsWithChildren } from "react";

export default function PaperLikeButton({
  children,
  ...props
}: ButtonProps & PropsWithChildren) {
  return (
    <Button
      {...props}
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        px: 3,
        py: 1.5,
        borderRadius: 3,
        textTransform: "none",
        fontWeight: "600",
        fontSize: "16px",
      }}
    >
      {children}
    </Button>
  );
}
