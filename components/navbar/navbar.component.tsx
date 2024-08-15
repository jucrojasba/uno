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
  background:#D4CCBE;
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
  background: #454545;
  border-radius: 50px;
  padding: 10px;
  width: 250px;
  height: 20px;
  color: white  
`;

const SearchInput = styled.input`
  padding: 6px;
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 18px;
  max-width: 200px;
  color: white;
`;

const NavList = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
`;

const NavItem = styled.li`
  display: inline-block;
  padding: 10px 20px;
  font-size: 30px;
  cursor: pointer;
  gap: 20px
`;

const StyledLink =styled(Link)`
  text-decoration:none;
  color: #454545;

  &:hover{color: white}
`

export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Title>Market</Title>
      </LogoContainer>
      <NavList>
        <NavItem>
          <StyledLink href="/">Inicio</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink href="/products">Productos</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink href="/create-product">Crear</StyledLink>
        </NavItem>
      </NavList>
      <SearchBox>
        <SearchInput type="text" placeholder="Search" />
        <Image src={search_icon_light} alt="" style={{ width: 20, height: 20 }} />
      </SearchBox>
      <ToggleIconContainer>
        <Image className="border" src={toggle} alt="" style={{ width: 60, height: 60 }} />
      </ToggleIconContainer>
    </NavbarContainer>
  );
};