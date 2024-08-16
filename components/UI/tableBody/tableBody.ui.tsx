import styled from "styled-components";
import { Product } from "@/models/product.model";
import Image from "next/image";
import { TableBodyProps } from "@/models/tableBody";
import React, { useState, useEffect } from 'react';
import { getProducts } from "@/utilities/get-products.utility"
import { handleDelete } from "../deleteButton/buttonDelete.ui"
import { GlobalTheme } from "@/app/GlobalStyling";
import StyledTagLink from "../links/tagsLink.ui";

const Tbody = styled.tbody``;

const Tr = styled.tr`
  border: 1px solid ${GlobalTheme.pageColors.textTertiary};
`;

const Td = styled.td`
  padding: 10px;
  color: ${GlobalTheme.pageColors.textTertiary};
  background: ${GlobalTheme.pageColors.widgetsQuaternary};
  border-bottom: 3px solid ${GlobalTheme.pageColors.textPrimary};

  & div{
    margin-top: 10px;
  }

  & div > *{
    cursor: default;
    margin-top: 10px;
`;

const ButtonDelete = styled.button`
  background-color: ${GlobalTheme.pageColors.btnQuinary};
  color: ${GlobalTheme.pageColors.textPrimary};
  border: none;
  padding: 10px;
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
            <Td>{product.title}
              <div>
                <StyledTagLink href="/" label={product.tag}></StyledTagLink>
              </div></Td>
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