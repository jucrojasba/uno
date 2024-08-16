'use client';
import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { GlobalStyle, GlobalTheme } from "./GlobalStyling";
import { Footer } from "@/components/footer/footer.component";
import { Navbar } from "@/components/navbar/navbar.component";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider theme={GlobalTheme}>
            <GlobalStyle />
            <div>
                <Navbar />
                {children}
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default ClientLayout;