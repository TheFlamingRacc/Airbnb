'use client'

import { Box, Button, IconButton } from "@mui/material";
import { useRef, useState } from "react";

const items = Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`);

export default function SectionWithSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollByAmount = 5;
  const itemWidth = 220;

  const handleScroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const scroll = direction === "left" ? -itemWidth * scrollByAmount : itemWidth * scrollByAmount;
    containerRef.current.scrollBy({ left: scroll, behavior: "smooth" });

    setTimeout(() => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
      }
    }, 300);
  };

  return (
    <Box  sx={{ position: "relative", width: "100%" }}>
      {/* Контейнер з картками */}
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          overflowX: "hidden",
          gap: 2,
          scrollBehavior: "smooth",
        }}
      >
        {items.map((item, i) => (
          <Box
            key={i}
            sx={{
              flex: "0 0 200px",
              height: 120,
              bgcolor: "primary.main",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
      
      <IconButton></IconButton>
      <Button
        variant="contained"
        onClick={() => handleScroll("left")}
        disabled={!canScrollLeft}
        sx={{ position: "absolute", left: 0, top: "40%" }}
      >
        ◀
      </Button>
      <Button
        variant="contained"
        onClick={() => handleScroll("right")}
        disabled={!canScrollRight}
        sx={{ position: "absolute", right: 0, top: "40%" }}
      >
        ▶
      </Button>
    </Box>
  );
}
