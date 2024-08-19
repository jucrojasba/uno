'use client';
import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Kaushan_Script } from 'next/font/google';
import Image from "next/image";
import social_media_fb from '../../public/assets/svg/facebook.svg'
import social_media_ig from '../../public/assets/svg/instagram.svg'
import social_media_x from '../../public/assets/svg/twitter-x.svg'
import ButtonIcon from "../UI/buttonTheme/buttonIcons.ui";

//Font for the Logo
const kaushan = Kaushan_Script({
    subsets: ['latin'],
    weight: '400',
});

const Body = styled.section`
    display: flex;
    flex-direction: column;
    align-items: end; 
    justify-content: end;
    text-align: end; 
    padding: 40px;

    hr {
        width: 80%; 
        margin: 30px 0;
        border: 1px solid ${({ theme }) => theme.pageColors.textQuaternary};
        align-self: end !important; 
        justify-self: end !important; 
    }
`;

const FooterTag = styled.footer`
    text-align: center;
    position: relative;
    bottom: 0;
    padding: 100px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-family: ${kaushan.style.fontFamily};
    font-style: normal;
    font-size: 50px;
    color: ${({ theme }) => theme.pageColors.textQuaternary};
`;

const Section = styled.section`
    margin-bottom: 50px;
    background-color: ${({ theme }) => theme.pageColors.widgetsQuaternary};
    margin-top: 50px;
    padding: 50px;
    border-radius: 15px;
`;

const SocialMediaSection = styled.section`
    background-color: transparent;
    margin-top: 50px;
    border-radius: 15px;
    display: flex;
    gap: 20px;
`;

export const Footer = () => {
    return (
        <FooterTag>
            <Body>
                <h1>Contáctanos</h1>
                <p>¡ Explora y disfruta de la jugetería más top de la internet ! Desde un juego clásico, hasta las últimas tendencias que adoras.</p>
                <hr />
            </Body>
            <SocialMediaSection>
                <ButtonIcon type="button" icon={
                    <Image src={social_media_fb} alt="Socials icon" style={{ width: 30, height: 30 }} />
                } onClick={() => console.log('Social Media Button was clicked!')}  href="https://www.facebook.com/?locale=es_LA" target="_blank"/>
                <ButtonIcon type="button" icon={
                    <Image src={social_media_ig} alt="Socials icon" style={{ width: 30, height: 30 }} />
                } onClick={() => console.log('Social Media Button was clicked!')}  href="https://www.instagram.com/" target="_blank"/>
                <ButtonIcon type="button" icon={
                    <Image src={social_media_x} alt="Socials icon" style={{ width: 30, height: 30 }} />
                } onClick={() => console.log('Social Media Button was clicked!')}  href="https://x.com/?lang=es" target="_blank"/>
            </SocialMediaSection>
            <Section>
                <Title>Market</Title>
                <p>&copy; 2024 Market, Inc.</p>
                <p>Todos los derechos reservados.</p>
            </Section>
        </FooterTag>
    );
};





