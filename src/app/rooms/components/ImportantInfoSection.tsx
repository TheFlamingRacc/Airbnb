import { Stack, Typography } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { EventBusyOutlined, ShieldSharp } from "@mui/icons-material";
import { pageData } from "../pageData";

const { importantInfo } = pageData;

export default function ImportantInfoSection() {
  return (
    <Stack spacing={3}>
      <Typography color="text.primary" fontSize={24} fontWeight={700}>
        Важлива інформація
      </Typography>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack width={"33%"} color={"text.primary"}>
          <EventBusyOutlined color="inherit" fontSize="large" sx={{ mb: 3 }} />
          <Typography color="text.primary" fontWeight={600}>
            {importantInfo[1].title}
          </Typography>
          <Typography color="text.secondary" maxWidth={"70%"}>
            {importantInfo[1].description}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Додати дати
          </Typography>
        </Stack>
        <Stack width={"33%"} color={"text.primary"}>
          <KeyIcon color="inherit" fontSize="large" sx={{ mb: 3 }} />
          <Typography color="text.primary" fontWeight={600}>
            {importantInfo[2].title}
          </Typography>
          {Array.isArray(importantInfo[2].description) ? (
            importantInfo[2].description.map((desc) => (
              <Typography key={desc} color="text.secondary" maxWidth={"70%"}>
                {desc}
              </Typography>
            ))
          ) : (
            <Typography color="text.secondary" maxWidth={"70%"}>
              {importantInfo[2].description}
            </Typography>
          )}
          <Typography
            color="text.secondary"
            sx={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Докладніше
          </Typography>
        </Stack>
        <Stack width={"33%"} color={"text.primary"}>
          <ShieldSharp color="inherit" fontSize="large" sx={{ mb: 3 }} />
          <Typography color="text.primary" fontWeight={600}>
            {importantInfo[3].title}
          </Typography>
          {Array.isArray(importantInfo[3].description) ? (
            importantInfo[3].description.map((desc) => (
              <Typography key={desc} color="text.secondary" maxWidth={"70%"}>
                {desc}
              </Typography>
            ))
          ) : (
            <Typography color="text.secondary" maxWidth={"70%"}>
              {importantInfo[3].description}
            </Typography>
          )}
          <Typography
            color="text.secondary"
            sx={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Докладніше
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
