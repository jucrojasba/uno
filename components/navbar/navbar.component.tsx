"use client";
import styled from "styled-components";
import React from "react";
import Link from 'next/link';
import search_icon_light from '/public/assets/img/search-b.png'
import toggle from '/public/assets/img/night.png'
import Image from 'next/image';
import { Kaushan_Script } from 'next/font/google';
import { GlobalTheme } from "@/app/GlobalStyling";


const kaushan = Kaushan_Script({
  subsets: ['latin'],
  weight: '400',
});

const Title = styled.h1`
  font-family: ${kaushan.style.fontFamily};
  font-style: normal;
  font-size: 50px;
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  gap: 50px
`;

const LogoContainer = styled.div`
  width: 100px;
  cursor: pointer;
`;

const ToggleIconContainer = styled.div`
  cursor: pointer;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: ${GlobalTheme.colors.widgetsQuaternary};
  border-radius: 50px;
  padding: 15px;
  width: 250px;
  height: 20px;
  color: ${GlobalTheme.colors.textTertiary}  
`;

const SearchInput = styled.input`
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 20px;
  max-width: 200px;
  color: ${GlobalTheme.colors.textTertiary};
`;

const NavList = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  gap: 50px;
`;

const NavItem = styled.li`
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
`;

const StyledLink =styled(Link)`
  text-decoration:none;
  padding: 15px;
  border-radius: 15px;
  color: ${GlobalTheme.colors.textTertiary};

  &:hover{
      font-weight: bold;
      background-color: ${GlobalTheme.colors.widgetsQuaternary}
    }
`
const Span = styled.span`
    background-color: ${GlobalTheme.colors.widgetsQuaternary};
    padding: 20px;
    border-radius: 100%;
    display: flex;
`;

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
        <Span>
          <Image className="border" src={toggle} alt="" style={{ width: 30, height: 30 }} />
        </Span>
      </ToggleIconContainer>
    </NavbarContainer>
  );
};