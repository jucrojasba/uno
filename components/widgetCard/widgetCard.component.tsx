"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";

//Implementation of Styled Component

const Section = styled.section`
    padding: 50px;
    border-radius: 5px;
    display: flex;
    gap: 50px
`

const WidgetCard = styled.div`
    padding: 50px;
    background-color: #60606033;
    border-radius: 5px;
    display: flex;
    gap: 20px
`

const Span = styled.span`
    padding: 10px 20px;
    background-color: #D49898;
    border-radius: 5px;
`

const BrandName = styled.h2`
    color: #454545
`

const Text = styled.p`
    color: #454545;
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
                    <Span>#Toys</Span>
                </WidgetBody>
            </WidgetCard>
            <WidgetCard>
                <WidgetBody>
                    <BrandName>LEGO</BrandName>
                    <Text>Acompañamos en los mejores momentos de su niñez.</Text>
                    <Span>#Toys</Span>
                </WidgetBody>
            </WidgetCard>
            <WidgetCard>
                <WidgetBody>
                    <BrandName>Mi Alegria</BrandName>
                    <Text>Acompañamos en los mejores momentos de su niñez.</Text>
                    <Span>#Toys</Span>
                </WidgetBody>
            </WidgetCard>
        </Section>
    );
}