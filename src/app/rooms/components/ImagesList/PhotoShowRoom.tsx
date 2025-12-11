import { Dialog, Slide, Box, Button, Typography } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ShareAndSaveButtonGroup from "../ShareAndSaveButtonGroup";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PhotoShowRoom({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: any;
}) {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      slots={{
        transition: Transition,
      }}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "background.default",
            overflow: "auto",
            height: "100%",
          },
        },
      }}
    >
      <Box display={"flex"} justifyContent={"space-between"} p={2}>
        <Button
          onClick={() => handleClose()}
          sx={{
            minWidth: "0",
            aspectRatio: "1",
            borderRadius: "50%",
            color: "text.primary",
          }}
          variant="text"
        >
          <ArrowBackIosNewIcon fontSize="inherit" />
        </Button>
        <ShareAndSaveButtonGroup />
      </Box>
    </Dialog>
  );
}
