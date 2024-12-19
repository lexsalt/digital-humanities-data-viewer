"use client";
import {
  Box,
  Button,
  ButtonBase,
  styled,
  Toolbar,
  Typography,
  AppBar,
} from "@mui/material";
import { useRouter } from "next/navigation";

import DarkModeToggle from "./DarkModeToggle";

const pages = ["OCR", "NER", "POS", "Sentiment", "Emotion"];

export function ResponsiveAppBar() {
  const router = useRouter();

  const handleCloseNavMenu = (page: string) => {
    return () => {
      router.push(`/${page.toLowerCase()}`);
    };
  };
  const handleTitleClick = () => {
    router.push("/");
  };

  return (
    <StyledAppBar elevation={0}>
      <Box>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingX: "2rem",
          }}
        >
          <Box>
            <ButtonBase
              onClick={handleTitleClick}
              sx={{ width: "9rem", paddingBottom: "3px", borderRadius: "5px" }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={0}
              >
                <Typography variant="caption">Digital</Typography>
                <Typography variant="caption">Humanities</Typography>
              </Box>
            </ButtonBase>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            gap={1}
          >
            {pages.map((page) => (
              <StyledLinks key={page} onClick={handleCloseNavMenu(page)}>
                {page}
              </StyledLinks>
            ))}
          </Box>
          <Box sx={{ paddingX: "0.5rem" }}>
            <DarkModeToggle />
          </Box>
        </Toolbar>
      </Box>
    </StyledAppBar>
  );
}
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: "static",
  background: theme.palette.background.default,
  color: theme.palette.primary.light,
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const StyledLinks = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.light,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));
