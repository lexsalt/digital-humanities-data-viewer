import { createTheme, PaletteMode } from "@mui/material";
import { useState } from "react";

export const useColorTheme = () => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  return {
    theme: theme,
    mode,
    toggleColorMode,
  };
};
