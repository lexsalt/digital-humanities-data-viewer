"use client";
import { Box, styled } from "@mui/material";

export default function Home() {
  return <StyledPageBox>Main</StyledPageBox>;
}
const StyledPageBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.1rem",
});
