'use client';
import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { IGlobalTheme } from "@/models/GlobalTheme";
import { Quicksand } from 'next/font/google';

// Fonts
const QuicksandFont = Quicksand({
  subsets: ['latin'],
  weight: '400',
});

// Define the themes
export const GlobalTheme: IGlobalTheme = {
    pageColors: {
        bgPrimary: '#FFFFFF',
        textPrimary: '#FFFFFF',
        bgSecondary: '#D4CCBE',
        bgTertiary: '#454545',
        textTertiary: '#454545',
        widgetsQuaternary: '#60606033',
        btnQuaternary: '#60606066',
        textQuaternary: '#60606050',
        btnQuinary: '#D49898',
        btnSenary: '#98A9D4',
    },
    tagsColor: {
        tagQuaternary: '#60606050',
        tagQuinary: '#D49898',
        tagSenary: '#98A9D4',
    }
};

export const GlobalDarkTheme: IGlobalTheme = {
    pageColors: {
        bgPrimary: '#454545',
        textPrimary: '#454545',
        bgSecondary: '#2B3341',
        bgTertiary: '#FFFFFF',
        textTertiary: '#FFFFFF',
        widgetsQuaternary: '#BFBFBF33',
        btnQuaternary: '#BBBBBB66',
        textQuaternary: '#FBFBF50',
        btnQuinary: '#D49898',
        btnSenary: '#98A9D4',
    },
    tagsColor: {
        tagQuaternary: '#BFBFBF50',
        tagQuinary: '#905E5E',
        tagSenary: '#5E6D90',
    }
};

// Global styles
export const GlobalStyle = createGlobalStyle<{ theme: IGlobalTheme }>`
html {
    width: 100% !important;
    margin: 0;
    padding: 0;
    background: linear-gradient(0deg, ${({ theme }) => theme.pageColors.bgPrimary} 60%, ${({ theme }) => theme.pageColors.bgSecondary} 100%) !important;
}    

body {
    background: transparent;
    color: ${({ theme }) => theme.pageColors.textTertiary};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    width: 100% !important;
}

h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.pageColors.textTertiary};
    font-weight: bolder;
}

p {
    color: ${({ theme }) => theme.pageColors.textTertiary};
    line-height: 1.5;
    font-weight: lighter;
    margin: 0;
}

input, textarea, button {
    font-family: ${QuicksandFont.style.fontFamily};
}
`;
