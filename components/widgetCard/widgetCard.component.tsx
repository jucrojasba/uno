"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { GlobalTheme } from "@/app/GlobalStyling";
import StyledTagLink from "../UI/links/tagsLink.component";

//Implementation of Styled Component

const Section = styled.section`
    padding: 50px;
    border-radius: 5px;
    display: flex;
    gap: 50px
`

const WidgetCard = styled.div`
    padding: 50px;
    background-color: ${GlobalTheme.pageColors.widgetsQuaternary};
    border-radius: 5px;
    display: flex;
    gap: 20px
`

const BrandName = styled.h2`
    color: ${GlobalTheme.pageColors.textTertiary}
`

const Text = styled.p`
    color: ${GlobalTheme.pageColors.textTertiary};
    padding-bottom: 50px
`

const WidgetBody = styled.div`
    padding: 20px;
    border-radius: 5px;
`

export default function WidgetCardComponent() {
    return (
        <Section>
            <WidgetCard>
                <WidgetBody>
                    <BrandName>MATTEL</BrandName>
                    <Text>Acompañamos en los mejores momentos de su niñez.</Text>
                    <StyledTagLink href="https://es.wikipedia.org/wiki/Juguete" label="#Toys" target="_blank"></StyledTagLink>
                </WidgetBody>
            </WidgetCard>
            <WidgetCard>
                <WidgetBody>
                    <BrandName>LEGO</BrandName>
                    <Text>Acompañamos en los mejores momentos de su niñez.</Text>
                    <StyledTagLink href="https://es.wikipedia.org/wiki/
                    Juguete" label="#Toys" target="_blank"></StyledTagLink>
                </WidgetBody>
            </WidgetCard>
            <WidgetCard>
                <WidgetBody>
                    <BrandName>Mi Alegria</BrandName>
                    <Text>Acompañamos en los mejores momentos de su niñez.</Text>
                    <StyledTagLink href="https://es.wikipedia.org/wiki/Juego_de_mesa" label="#Games" target="_blank"></StyledTagLink>
                </WidgetBody>
            </WidgetCard>
        </Section>
    );
}