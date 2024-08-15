"use client";
import styled from "styled-components";
import { Product } from "@/models/product.model";
import { getProducts } from "@/utilities/get-products.utility";
import { useEffect, useState } from "react";
import Image from "next/image";
import { GlobalTheme } from "@/app/GlobalStyling";

// Implementation of Styled Component

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Table = styled.table`
  box-shadow: 0px 2px 4px ${GlobalTheme.colors.textQuaternary};
  text-align: center;
  width: 80%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
  overflow: hidden;
`;

const Thead = styled.thead`
  background-color: ${GlobalTheme.colors.bgTertiary};
  font-size: 22px;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
border: 1px solid ${GlobalTheme.colors.bgTertiary};
`;

const Th = styled.th`
  padding: 10px;
  color: ${GlobalTheme.colors.textPrimary};
`;

const Td = styled.td`
  padding: 10px;
  color: ${GlobalTheme.colors.textTertiary};
  background: ${GlobalTheme.colors.widgetsQuaternary};
  border-bottom: 2px solid ${GlobalTheme.colors.textPrimary};
`;

export default function TableComponent() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    
    const productsList = getProducts();
    if (productsList) {
      setProducts(productsList);
    }
  }, []);

  return (
    <Main>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>NOMBRE</Th>
            <Th>PRECIO</Th>
            <Th>DESCRIPCIÓN</Th>
            <Th>IMAGEN</Th>
          </Tr>
        </Thead>
        <Tbody>
    {products.length > 0 ? (
    products.map((product: Product) => {
      return (
        <Tr key={product.id}>
          <Td>{product.id}</Td>
          <Td>{product.title}</Td>
          <Td>{product.price}</Td>
          <Td>{product.description}</Td>
          <Td>
            <Image src={product.image} alt={product.title} width={100} height={100} />
          </Td>
        </Tr>
      );
    })
  ) : (
    <Tr>
      <Td colSpan={5}>No hay productos disponibles...</Td>
    </Tr>
  )}
  </Tbody>
      </Table>
    </Main>
  );
}
