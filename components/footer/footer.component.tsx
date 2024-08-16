'use client';
import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Kaushan_Script } from 'next/font/google';
import { GlobalTheme } from "@/app/GlobalStyling";
import Image from "next/image";
import social_media_fb from '../../public/assets/svg/facebook.svg'
import social_media_ig from '../../public/assets/svg/instagram.svg'
import social_media_x from '../../public/assets/svg/twitter-x.svg'

//Font for the Logo
const kaushan = Kaushan_Script({
    subsets: ['latin'],
    weight: '400',
});

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
    color: ${GlobalTheme.colors.textQuaternary};
`;

const Section = styled.section`
    margin-bottom: 50px;
    background-color: ${GlobalTheme.colors.widgetsQuaternary};
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

const Span = styled.span`
    background-color: ${GlobalTheme.colors.widgetsQuaternary};
    padding: 20px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
`;

export const Footer = () => {
    return (
        <FooterTag>
            <SocialMediaSection>
                <Span>
                    <Image src={social_media_fb} alt="facebook-logo" style={{ width: 20, height: 20 }} />
                </Span>
                <Span>
                    <Image src={social_media_ig} alt="instagram-logo" style={{ width: 20, height: 20 }} />
                </Span>
                <Span>
                    <Image src={social_media_x} alt="twitter-x-logo" style={{ width: 20, height: 20 }} />
                </Span>
            </SocialMediaSection>
            <Section>
                <Title>Market</Title>
                <p>&copy; 2024 Market, Inc.</p>
                <p>Todos los derechos reservados.</p>
            </Section>
        </FooterTag>
    );
};





