import { Chip } from "@mui/material";

export default function PopularChip({ label }: { label: string }) {
  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: "background.default",
        height: "auto",
        "& .MuiChip-label": {
          display: "block",
          whiteSpace: "normal",
        },
      }}
    />
  );
}
