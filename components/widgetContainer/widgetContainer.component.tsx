"use client";
import styled from "styled-components";
import WidgetCards from '../UI/widgetCard/widgetCard.ui';
import { WidgetCardProps } from "@/models/widgetCard";

//Implementation of Styled Component

const Section = styled.section`
    padding: 50px;
    border-radius: 5px;
    display: flex;
    gap: 60px
`

//----------------------------- Instantiation for Home View -----------------------------

const company1: WidgetCardProps = {
    title: 'MATTEL',
    description: 'Acompañamos en los mejores momentos de su niñez.',
    tag: {
        label: 'Toys',
        href: 'https://es.wikipedia.org/wiki/Juguete',
        target: '_blank'
    }
};

const company2: WidgetCardProps = {
    title: 'LEGO',
    description: 'Acompañamos en los mejores momentos de su niñez.',
    tag: {
        label: 'Toys',
        href: 'https://es.wikipedia.org/wiki/Juguete',
        target: '_blank'
    }
};

const company3: WidgetCardProps = {
    title: 'Mi Alegría',
    description: 'Acompañamos en los mejores momentos de su niñez.',
    tag: {
        label: 'Games',
        href: 'https://es.wikipedia.org/wiki/Juego_de_mesa',
        target: '_blank'
    }
};

//----------------------------- Instantiation for Home View -----------------------------

export default function WidgetCardComponent() {
    return (
        <Section>
            {WidgetCards(company1)}
            {WidgetCards(company2)}
            {WidgetCards(company3)}
        </Section>
    );
}