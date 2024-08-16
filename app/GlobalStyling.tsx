'use client';
import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Navbar } from "@/components/navbar/navbar.component";
import { Footer } from "@/components/footer/footer.component";

// Setting our Global Theme
export const GlobalTheme = {
    colors: {
        bgPrimary: '#FFFFFF',               //White
        textPrimary: '#FFFFFF',             //White
        bgSecondary: '#D4CCBE',             //Beige
        bgTertiary: '#454545',              //Dark Gray
        textTertiary: '#454545',            //Dark Gray
        widgetsQuaternary: '#60606033',     //Gray (20% Opacity)
        textQuaternary: '#60606050',        //Gray (50% Opacity)
        btnQuinary: '#D49898',              //Red
        btnSenary: '#98A9D4',               //Blue
    }
};

// Global styling for essential HTML elements
export const GlobalStyle = createGlobalStyle`
html{
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
}    

body {
        background: linear-gradient(0deg, ${GlobalTheme.colors.bgPrimary} 60%, ${GlobalTheme.colors.bgSecondary} 100%);
        color: ${GlobalTheme.colors.textTertiary};
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box;
        min-height: 100vh;
        width: 100% !important;
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${GlobalTheme.colors.textTertiary};
        font-weight: bolder;
    }

    p {
        color: ${GlobalTheme.colors.textTertiary};
        line-height: 1.5;
        font-weight: lighter;
        margin: 0;
    }
`;