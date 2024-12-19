"use client";
import { Box, styled } from "@mui/material";

export function Ocr() {
  return <StyledPageBox>Ocr</StyledPageBox>;
}
const StyledPageBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.1rem",
});
