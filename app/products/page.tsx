"use client";
import TableComponent from '@/components/table/table.component';
import styled from 'styled-components';
import { Kaushan_Script } from 'next/font/google'; 

const kaushan = Kaushan_Script({
  subsets: ['latin'],
  weight: '400',
});

const Title = styled.h1`
  font-family: ${kaushan.style.fontFamily};
  font-style: normal;
  font-size: 70px;
  text-align: center
`;

const ProductTable: React.FC = () => {
  return (
    <>
      <Title>Productos</Title>
      <TableComponent />
    </>
  );
}

export default ProductTable;

