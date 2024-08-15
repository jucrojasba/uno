'use client'
import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// Setting our Global Theme
const GlobalTheme = {
    colors: {
        bgPrimary: '#FFFFFF',               //White
        bgSecondary: '#D4CCBE',             //Beige
        textTertiary: '#454545',            //Dark Gray 
        widgetsQuaternary: '#60606033',     //Gray (20% Opacity)
        btnQuinary: '#D49898',              //Red
        btnSenary: '#98A9D4',               //Blue
    }
};

// Global styling for essential HTML elements
const GlobalStyle = createGlobalStyle`
    body {
        background: linear-gradient(0deg, ${GlobalTheme.colors.bgPrimary} 70%, ${GlobalTheme.colors.bgSecondary} 100%);
        color: ${GlobalTheme.colors.textTertiary};
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${GlobalTheme.colors.textTertiary};
        font-weight: bolder;
        margin-bottom: 15px;
    }

    p {
        color: ${GlobalTheme.colors.textTertiary};
        margin-bottom: 20px;
        line-height: 1.5;
        font-weight: lighter;
    }

    ul, ol {
        padding-left: 20px;
        margin-bottom: 20px;
    }
`;
export const Footer = styled.footer`
    background-color: #60606033;
    margin-left: 50px;
    margin-right: 50px;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
    <ThemeProvider theme={GlobalTheme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
    );
};

export default ClientLayout;