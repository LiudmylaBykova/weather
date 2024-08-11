"use client";
import { ThemeProvider } from "next-themes";

import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
