'use client';
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, GlobalDarkTheme, GlobalTheme } from "./GlobalStyling";
import { getPageTheme, setPageTheme } from "@/utilities/page-theme.utility";
import { Footer } from "@/components/footer/footer.component";
import { Navbar } from "@/components/navbar/navbar.component";

// ClientLayout component
const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // State to manage the current theme
    const [theme, setTheme] = useState(getPageTheme());

    // Effect to update the theme on mount
    useEffect(() => {
        setTheme(getPageTheme());
    }, []);

    const handleToggleTheme = () => {
        // Toggle between 'dark' and 'light'
        const newTheme = theme === GlobalDarkTheme ? GlobalTheme : GlobalDarkTheme;
        setPageTheme(newTheme === GlobalDarkTheme ? 'dark' : 'light');
        setTheme(newTheme);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme}/>
            <div>
                <Navbar onToggleTheme={handleToggleTheme} />
                {children}
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default ClientLayout;
