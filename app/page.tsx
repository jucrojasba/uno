'use client'
import React from "react";
import styled from "styled-components";
import WidgetCardComponent from "@/components/widgetCard/widgetCard.component";

// Styling for important components from Body
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
    background-color: #60606033;
    margin-left: 50px;
    margin-right: 50px;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;

export default function Home() {
  return (
    <>
      <Header>
        <h1>Market</h1>
        <nav>Aquí irían los botones del nav</nav>
      </Header>
      <Main>
        {WidgetCardComponent()}
      </Main>
      <Footer>
        <p>&copy; 2024 Market, Inc.</p>
        <p>Todos los derechos reservados.</p>
      </Footer>
    </>
  );
}