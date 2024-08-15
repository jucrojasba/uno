"use client";
import styled from "styled-components";
import React from "react";
import Link from 'next/link';
import search_icon_light from '../navbar/assets/search-w.png'
import toggle from '../navbar/assets/night.png'
import Image from 'next/image';
import { Kaushan_Script } from 'next/font/google'; 



const kaushan = Kaushan_Script({
  subsets: ['latin'],
  weight: '400',
});

const Title = styled.h1`
  font-family: ${kaushan.style.fontFamily};
  font-style: normal;
  font-size: 50px;
  margin-left: 30px;
`;

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:#e2c99f;
  padding: 1px;
`;

const LogoContainer = styled.div`
  width: 160px;
  cursor: pointer;
`;

const ToggleIconContainer = styled.div`
  cursor: pointer; 
  width: 100px;
   
    
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: black;
  border-radius: 50px;
  padding: 10px;
  width: 250px;
  height: 20px;
     
 
`;

const SearchInput = styled.input`
  margin-right: 20px; 
  padding: 6px;
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 18px;
  max-width: 200px;
  color: white;
`;

const NavList = styled.ul`
  flex: 1;
  list-style: none;
  text-align: center;
  display: inline-block;
`;

const NavItem = styled.li`
  display: inline-block;
  margin: 10px 20px;
  font-size: 30px;
  cursor: pointer;
  
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Title>Market</Title>
      </LogoContainer>
      <NavList>
        <NavItem>
          <Link href="/">Inicio</Link>
        </NavItem>
        <NavItem>
          <Link href="/products">Productos</Link>
        </NavItem>
        <NavItem>
          <Link href="/create-product">Crear</Link>
        </NavItem>
      </NavList>
      <SearchBox>
        <SearchInput type="text" placeholder="Search" />
        <Image src={search_icon_light} alt="" style={{ width: 20, height: 20 }} />
      </SearchBox>
      <ToggleIconContainer>
        <Image src={toggle} alt="" style={{ width: 60, height: 60 }} />
      </ToggleIconContainer>
    </NavbarContainer>
  );
};