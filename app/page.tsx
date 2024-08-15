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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
`;

export default function Home() {
  return (
    <>
      <Main>
        {WidgetCardComponent()}
        <h1>¡Bienvenido! Vive la experiencia Market</h1>
        <p>¡ Explora y disfruta de la jugetería más top de la internet ! Desde un juego clásico, hasta las últimas tendencias que adoras.</p>
      </Main>
    </>
  );
}