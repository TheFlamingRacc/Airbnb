import { Button } from "@mui/material";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import { ButtonProps } from "@mui/material";

export default function ShowAllPhotosButton({ ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        position: "absolute",
        bottom: "25px",
        right: "25px",
        backgroundColor: "background.default",
        border: "solid 1px",
        borderRadius: "10px",
        borderColor: "text.primary",
        color: "text.primary",
        "&:hover": {
          backgroundColor: "grey.200",
        },
      }}
      startIcon={<AppsRoundedIcon />}
    >
      Показати всі фотографії
    </Button>
  );
}
