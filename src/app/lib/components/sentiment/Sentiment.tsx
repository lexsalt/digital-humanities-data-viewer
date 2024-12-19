"use client";
import { Box, Button, Typography } from "@mui/material";
import { SentimentGrid } from "./SentimentGrid";
import { departure } from "./departure";
import { returnFierro } from "./return";
import { useState } from "react";
export function Sentiment() {
  const [sentences, setSentences] = useState(departure);
  const [isDeparture, setIsDeparture] = useState(true);
  const handleClick = () => {
    if (isDeparture) {
      setSentences(returnFierro);
    } else {
      setSentences(departure);
    }
    setIsDeparture(!isDeparture);
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"0.1rem"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"6 rem"}
        margin={"2rem"}
      >
        <Button variant="contained" onClick={() => handleClick()} size="large">
          {isDeparture ? "The Departure" : "The Return"}
        </Button>
      </Box>
      <SentimentGrid sentences={sentences} />
    </Box>
  );
}
