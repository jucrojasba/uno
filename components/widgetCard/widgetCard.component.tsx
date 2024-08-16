"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { GlobalTheme } from "@/app/GlobalStyling";

//Implementation of Styled Component

const Section = styled.section`
    padding: 50px;
    border-radius: 5px;
    display: flex;
    gap: 50px
`

const WidgetCard = styled.div`
    padding: 50px;
    background-color: ${GlobalTheme.colors.widgetsQuaternary};
    border-radius: 5px;
    display: flex;
    gap: 20px
`

const ToyTag = styled.span`
    padding: 10px 20px;
    background-color: ${GlobalTheme.colors.btnQuinary};
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer
`

const GameTag = styled.span`
    padding: 10px 20px;
    background-color: ${GlobalTheme.colors.btnSenary};
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer
`

const BrandName = styled.h2`
    color: ${GlobalTheme.colors.textTertiary}
`

const Text = styled.p`
    color: ${GlobalTheme.colors.textTertiary};
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
                    <ToyTag>#Toys</ToyTag>
                </WidgetBody>
            </WidgetCard>
            <WidgetCard>
                <WidgetBody>
                    <BrandName>LEGO</BrandName>
                    <Text>Acompañamos en los mejores momentos de su niñez.</Text>
                    <ToyTag>#Toys</ToyTag>
                </WidgetBody>
            </WidgetCard>
            <WidgetCard>
                <WidgetBody>
                    <BrandName>Mi Alegria</BrandName>
                    <Text>Acompañamos en los mejores momentos de su niñez.</Text>
                    <GameTag>#Games</GameTag>
                </WidgetBody>
            </WidgetCard>
        </Section>
    );
}