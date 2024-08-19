import React from 'react';
import { LinkProps } from '@/models/link.model';
import Link from 'next/link';
import styled from "styled-components";
import { getTagColor } from '@/utilities/get-tag-colors.utility';

const TagLinkComponent = styled(Link)<{ label: string }>`
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${({ label }) => getTagColor(label)};
  color: ${({ theme }) => theme.pageColors.textTertiary};
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;

const StyledTagLink: React.FC<LinkProps> = ({ href, label, target }) => {
  return <TagLinkComponent href={href} target={target} label={label}>{`#${label}`}</TagLinkComponent>;
};

export default StyledTagLink;
