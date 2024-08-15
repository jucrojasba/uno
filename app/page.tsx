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



export default function Home() {
  return (
    <>
      <Main>
        
        {WidgetCardComponent()}
        <h1>Bienvenido a Market!</h1>
      </Main>
    </>
  );
}