import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { ReactNode, useState } from "react";
import { useThemeContext } from "./ThemeContextProvider";
import DarkModeToggle from "../components/DarkModeToggle";

type Props = {
  children: ReactNode;
  font?: string;
};

export default function ThemeProvider({ children, font }: Props) {
  const { theme } = useThemeContext();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
