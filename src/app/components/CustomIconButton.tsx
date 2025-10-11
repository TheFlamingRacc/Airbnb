import { Button } from "@mui/material";
import { ButtonProps } from "@mui/material";

type CustomIconButtonProps = ButtonProps & {};

export default function CustomIconButton({
  variant,
  children,
}: CustomIconButtonProps) {
  return (
    <Button
      sx={{
        borderRadius: "50%",
        aspectRatio: 1,
        minWidth: 0,
      }}
      variant={variant}
    >
      {children}
    </Button>
  );
}
