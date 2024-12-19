"use client";
import { Box, styled, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export function RedirectToMain({ message }: { message: string }) {
  const router = useRouter();
  return (
    <StyledPageBox>
      <Typography variant="h5">
        {message ?? "Page not found: Redirect to main page:"}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push(`/`)}
        sx={{ my: 2 }}
      >
        Go to main page
      </Button>
    </StyledPageBox>
  );
}

const StyledPageBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "2rem",
  gap: "0.1rem",
  height: "100vh",
});
