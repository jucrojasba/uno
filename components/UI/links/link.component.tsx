import React from 'react'
import { LinkProps } from '@/models/link.model';
import Link from 'next/link';
import { GlobalTheme } from "@/app/GlobalStyling";
import styled from "styled-components"

const LinkComponent =styled(Link)`
  text-decoration:none;
  padding: 15px;
  border-radius: 15px;
  color: ${GlobalTheme.colors.textTertiary};

  &:hover{
      font-weight: bold;
      background-color: ${GlobalTheme.colors.widgetsQuaternary}
    }
`

const StyledLink: React.FC<LinkProps> = ({ href, label }) => {
  return <LinkComponent href={href}>{label}</LinkComponent>;
};

export default StyledLink
