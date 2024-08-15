'use client'
import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// Tema de la pagina
const theme = {
    colors: {
        bgPrimary: '#FFFFFF',
        bgSecondary: '#D4CCBE',
        textTertiary: '#454545',
        widgetsQuaternary: '#60606033',
        btnQuinary: '#D49898',
        btnSenary: '#98A9D4',
    }
};

// Estilos Globales
const GlobalStyle = createGlobalStyle`
    body {
        background: linear-gradient(0deg, ${theme.colors.bgPrimary} 80%, ${theme.colors.bgSecondary} 100%);
        color: ${theme.colors.textTertiary};
        font-family: "Quicksand", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        height: 100vh
    }
`;

// Estilos para elementos HTML básicos
const HTMLStyles = createGlobalStyle`
    h1, h2, h3, h4, h5, h6 {
        color: ${theme.colors.textTertiary};
        font-weight: bolder;
        margin-bottom: 15px;
    }

    p {
        color: ${theme.colors.textTertiary};
        margin-bottom: 20px;
        line-height: 1.5;
        font-weight: lighter;
    }

    ul, ol {
        padding-left: 20px;
        margin-bottom: 20px;
    }
`;

// Componentes de estilo
const Header = styled.header`
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Main = styled.main`
    padding: 40px;
`;

const Footer = styled.footer`
    padding: 10px;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <Header>
                    <h1>Market</h1>
                    <nav>Aqui irian los botones del nav</nav>
                </Header>
                <Main>
                    <p>Aqui ira el home.</p>
                </Main>
                <Footer>
                    <p>&copy; 2024 Market, Inc. Riwi Be a Coder.</p>
                    <p>Todos los derechos reservados.</p>
                </Footer>
            </>
        </ThemeProvider>
    );
}

