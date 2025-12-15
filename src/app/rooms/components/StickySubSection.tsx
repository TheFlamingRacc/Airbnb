import { Box, Paper, Typography, Button } from "@mui/material";
import { Dayjs } from "dayjs";

type Props = {
  value: [null | Dayjs, null | Dayjs];
  setValue: (value: [Dayjs | null, Dayjs | null]) => void;
  price: number;
};

export default function StickySubSection({ value, setValue, price }: Props) {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "370px" },
        position: "sticky",
        top: { xs: 0, sm: "140px" },
        alignSelf: "flex-start",
      }}
    >
      <Paper
        sx={{
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "background.default",
          border: "solid 1px",
          borderColor: "background.paper",
        }}
      >
        <Typography fontWeight={500} fontSize={28} mb={2}>
          {value[0] === null || value[1] === null
            ? "Додайте дати, щоб дізнатися ціни"
            : `₴${
                price *
                value[1].startOf("day").diff(value[0].startOf("day"), "day")
              }`}
          <Typography component={"span"}>
            {value[0] === null || value[1] === null
              ? ""
              : ` за ${value[1]
                  .startOf("day")
                  .diff(value[0].startOf("day"), "day")} ${
                  value[1]
                    .startOf("day")
                    .diff(value[0].startOf("day"), "day") === 1
                    ? "ніч"
                    : "ночі"
                }`}
          </Typography>
        </Typography>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            py: 1.5,
            fontWeight: 600,
            borderRadius: "99px",
            textTransform: "none",
          }}
        >
          Забронювати
        </Button>
        {value[0] === null ||
          (value[1] === null && (
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              Поки що ви нічого не платите
            </Typography>
          ))}
      </Paper>
    </Box>
  );
}
