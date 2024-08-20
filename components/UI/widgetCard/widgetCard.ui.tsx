"use client";
import styled from "styled-components";
import StyledTagLink from "../links/tagsLink.ui";
import { WidgetCardProps } from "@/models/widgetCard";

const WidgetCard = styled.div`
    padding: 50px;
    background-color: ${({ theme }) => theme.pageColors.widgetsQuaternary};
    border-radius: 5px;
    display: flex;
    gap: 20px
`

const BrandName = styled.h2`
    color: ${({ theme }) => theme.pageColors.textTertiary}
`

const Text = styled.p`
    color: ${({ theme }) => theme.pageColors.textTertiary};
    padding-bottom: 50px;
`

const WidgetBody = styled.div`
    padding: 20px;
    border-radius: 5px;
`

function WidgetCards({ title, description, tag }: WidgetCardProps) {
    return (
        <WidgetCard>
            <WidgetBody>
                <BrandName>{title}</BrandName>
                <Text>{description}</Text>
                <StyledTagLink href={tag.href} label={tag.label} target={tag.target}></StyledTagLink>
            </WidgetBody>
        </WidgetCard>
    );
};


export default WidgetCards
