import styled from "styled-components";
import { Product } from "@/models/product.model";
import Image from "next/image";
import { TableBodyProps } from "@/models/tableBody";
import React, { useState, useEffect } from 'react';
import { getProducts } from "@/utilities/get-products.utility"
import { handleDelete } from "../deleteButton/ButtonDelete.ui"

const Tbody = styled.tbody``;
const Tr = styled.tr`
  border: 1px solid #454545;
`;

const Td = styled.td`
  padding: 10px;
  color: #000;
  background: #e2c99f;
  border-bottom: 3px solid #fff;
`;

const ButtonDelete = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const TableBody = ({ products }: TableBodyProps) => {
  const [productsState, setProductsState] = useState<Product[]>([]);

  useEffect(() => {
    const productsList = getProducts();
    if (productsList) {
      setProductsState(productsList);
    }
  }, []);

  const handleDeleteProduct = (id: number) => {
    handleDelete(id, setProductsState);
  };

  return (
    <Tbody>
      {productsState.length > 0 ? (
        productsState.map((product: Product) => (
          <Tr key={product.id}>
            <Td>{product.id}</Td>
            <Td>{product.title}</Td>
            <Td>{product.price}</Td>
            <Td>{product.description}</Td>
            <Td>
              <Image
                src={product.image}
                alt={product.title}
                width={100}
                height={100}
              />
            </Td>
            <Td>
              <ButtonDelete onClick={() => handleDeleteProduct(product.id)}>
                Eliminar
              </ButtonDelete>
            </Td>
          </Tr>
        ))
      ) : (
        <Tr>
          <Td colSpan={6}>No hay productos disponibles</Td>
        </Tr>
      )}
    </Tbody>
  );
};

export { TableBody };