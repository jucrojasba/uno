import React from 'react'
import { LinkProps } from '@/models/link.model';
import Link from 'next/link';
import { GlobalTheme } from "@/app/GlobalStyling";
import styled from "styled-components"
import { getTagColor } from '@/utilities/get-tag-colors.utility';

const StyledTagLink: React.FC<LinkProps> = ({ href, label, target }) => {
  const TagLinkComponent = styled(Link)`
        text-decoration:none;
        padding: 5px 10px;
        border-radius: 10px;
        background-color: ${getTagColor(label)};
        color: ${GlobalTheme.pageColors.textTertiary};
        font-weight: bold;
        font-size: 15px;
        cursor: pointer
  `

  return <TagLinkComponent href={href} target={target}>{`#${label}`}</TagLinkComponent>;
};

export default StyledTagLink
