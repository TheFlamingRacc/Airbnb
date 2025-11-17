"use client";

import { IconButton, alpha } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function LikeButton({ liked = false }: { liked?: boolean }) {
  const handleLike = () => {
    return "";
  };
  return (
    <IconButton
      onClick={() => handleLike()}
      sx={{
        backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.3),
      }}
    >
      {liked ? (
        <FavoriteIcon fontSize="small" />
      ) : (
        <FavoriteBorderIcon fontSize="small" />
      )}
    </IconButton>
  );
}
