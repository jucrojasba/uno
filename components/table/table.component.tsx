"use client";
import styled from "styled-components";
import { Product } from "@/models/product.model";
import { getProducts } from "@/utilities/get-products.utility";
import { useEffect, useState } from "react";
import Image from "next/image";

// Implementation of Styled Component

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Table = styled.table`
  text-align: center;
  width: 80%;
  border-collapse: separate;
  border-spacing: 0; 
  border-radius: 10px;
  overflow: hidden;
`;

const Thead = styled.thead`
  background-color: #000;
  font-size: 22px;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
`;

const Th = styled.th`
  padding: 10px;
  color: #fff;
`;

const Td = styled.td`
  padding: 10px;
  color: #000;
  background: #e2c99f;
  border-bottom: 3px solid #fff;
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
            <Th>IMG</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product: Product) => {
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
          })}
        </Tbody>
      </Table>
    </Main>
  );
}
