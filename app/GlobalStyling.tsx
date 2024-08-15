// ClientLayout.tsx
'use client';
import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Navbar } from "@/components/navbar/navbar.component";
import { Kaushan_Script } from 'next/font/google';

const kaushan = Kaushan_Script({
    subsets: ['latin'],
    weight: '400',
});

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
        min-height: 100vh;
    }

    #__next {
        display: flex;
        flex-direction: column;
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

export const Footer = styled.footer`
   
    text-align: center;
    position: relative;
    bottom: 0;
    padding: 100px;

    & section{
        background-color: ${GlobalTheme.colors.widgetsQuaternary};
        padding: 50px;
        border-radius: 15px;
    }
`;

const Title = styled.h1`
  font-family: ${kaushan.style.fontFamily};
  font-style: normal;
  font-size: 50px;
  margin-left: 30px;
`;

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider theme={GlobalTheme}>
            <Navbar />
            <GlobalStyle />
            <div>
                {children}
                <Footer>
                    <section>
                        <Title>Footer</Title>
                        <p>&copy; 2024 Market, Inc.</p>
                        <p>Todos los derechos reservados.</p>
                    </section>
                </Footer>
            </div>
        </ThemeProvider>
    );
};

export default ClientLayout;