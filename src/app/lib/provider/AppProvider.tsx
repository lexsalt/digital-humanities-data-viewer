"use client";
import { ReactNode } from "react";
import ThemeProvider from "../theme/ThemeProvider";
import { ThemeContextProvider } from "../theme/ThemeContextProvider";
import { ResponsiveAppBar } from "../components";

type AppProviderProps = {
  children: ReactNode;
};
export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeContextProvider>
      <ThemeProvider font="GeistVF">
        <ResponsiveAppBar />
        {children}
      </ThemeProvider>
    </ThemeContextProvider>
  );
}
