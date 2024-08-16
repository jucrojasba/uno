'use client'
import React from "react";
import styled from "styled-components";
import WidgetCardComponent from "@/components/widgetCard/widgetCard.component";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center !important;
    padding: 40px;
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center !important;
    text-align: center !important;
    padding: 40px;
`;

export default function Home() {
  return (
    <>
      <Main>
        {WidgetCardComponent()}
        <Section>
          <h1>¡Bienvenido! Vive la experiencia Market</h1>
          <p>¡ Explora y disfruta de la jugetería más top de la internet ! Desde un juego clásico, hasta las últimas tendencias que adoras.</p>
        </Section>
      </Main>
    </>
  );
}