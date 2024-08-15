"use client"
import Image from "next/image";
import { Navbar } from "../components/navbar/navbar.component";
import styled from "styled-components";
import React from "react";

const Main = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export default function Home() {
  return (
    <Main>
      <Navbar />
    </Main>
  );
}