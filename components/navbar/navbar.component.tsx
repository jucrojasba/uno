'use client';
import styled from "styled-components";
import React from "react";
import StyledLink from "../UI/links/link.ui";
import searchIcon from '/public/assets/img/search.png';
import toggleIconDark from '/public/assets/img/dark.png';
import toggleIconLight from '/public/assets/img/light.png';
import Image from 'next/image';
import ButtonTheme from "../UI/buttonTheme/buttonTheme.ui";
import { Kaushan_Script } from 'next/font/google';

// Fonts
const kaushan = Kaushan_Script({
  subsets: ['latin'],
  weight: '400',
});

// Styled components
const Title = styled.h1`
  font-family: ${kaushan.style.fontFamily};
  font-style: normal;
  font-size: 50px;
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 100px;
  padding-right: 100px;
  gap: 50px;
`;

const LogoContainer = styled.div`
  padding-right: 40px;
  width: 100px;
  cursor: pointer;
`;

const ToggleIconContainer = styled.div`
  cursor: pointer;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.pageColors.widgetsQuaternary};
  border-radius: 50px;
  padding: 15px;
  width: 250px;
  height: 20px;
  color: ${({ theme }) => theme.pageColors.textTertiary};
`;

const SearchInput = styled.input`
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 20px;
  max-width: 200px;
  color: ${({ theme }) => theme.pageColors.textTertiary};
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

// Navbar component
export const Navbar: React.FC<{ onToggleTheme: () => void }> = ({ onToggleTheme }) => {
  function ToggleTheme () {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
      return (
        <ButtonTheme type="button" icon={
          <Image src={toggleIconDark} alt="Toggle theme" style={{ width: 30, height: 30 }} />
        } onClick={onToggleTheme} />
      ) 
    } else {
      return (
        <ButtonTheme type="button" icon={
          <Image src={toggleIconLight} alt="Toggle theme" style={{ width: 30, height: 30 }} />
        } onClick={onToggleTheme} />
      )
    }
  }

  return (
    <NavbarContainer>
      <LogoContainer>
        <Title>Market</Title>
      </LogoContainer>
      <NavList>
        <NavItem>
          <StyledLink href="/" label="Inicio" />
        </NavItem>
        <NavItem>
          <StyledLink href="/products" label="Productos" />
        </NavItem>
        <NavItem>
          <StyledLink href="/create-product" label="Crear" />
        </NavItem>
      </NavList>
      <SearchBox>
        <SearchInput type="text" placeholder="Search" />
        <Image src={searchIcon} alt="Search icon" style={{ width: 20, height: 20 }} />
      </SearchBox>
      <ToggleIconContainer>
        {ToggleTheme()}
      </ToggleIconContainer>
    </NavbarContainer>
  );
};
