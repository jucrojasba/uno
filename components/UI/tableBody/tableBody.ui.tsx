import styled from "styled-components";
import { Product } from "@/models/product.model";
import Image from "next/image";
import { TableBodyProps } from "@/models/tableBody";
import React, { useState, useEffect } from 'react';
import { getProducts } from "@/utilities/get-products.utility"
import { handleDelete } from "../deleteButton/buttonDelete.ui"
import toggle from '@/public/assets/img/compartimiento.png'
import { Span } from "@/components/UI/deleteButton/buttonDelete.ui";
import StyledTagLink from "../links/tagsLink.ui";

const Tbody = styled.tbody``;

const Tr = styled.tr`
  border: 1px solid ${({ theme }) => theme.pageColors.textTertiary};
`;

const Td = styled.td`
  padding: 10px;
  color: ${({ theme }) => theme.pageColors.textTertiary};
  background: ${({ theme }) => theme.pageColors.widgetsQuaternary};
  border-bottom: 3px solid ${({ theme }) => theme.pageColors.textPrimary};

  & div{
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

type HandleDeleteProduct = (id: number) => void;

const TableBody = ({ products }: TableBodyProps) => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsList = await getProducts();
        setProductsList(productsList);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDeleteProduct: HandleDeleteProduct = (id) => {
    handleDelete(id, setProductsList);
  };

  if (loading) {
    return (
      <Tbody>
        <Tr>
          <Td colSpan={6}>Cargando...</Td>
        </Tr>
      </Tbody>
    );
  }

  if (error) {
    return (
      <Tbody>
        <Tr>
          <Td colSpan={6}>Error al cargar los productos.</Td>
        </Tr>
      </Tbody>
    );
  }

  return (
    <Tbody>
      {productsList.length > 0 ? (
        productsList.map((product: Product) => (
          <Tr key={product.id}>
            <Td>{product.id}</Td>
            <Td>{product.title}
              <div>
                <StyledTagLink href="#" label={product.tag}></StyledTagLink>
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
              <div>
              <Span >
                <Image src={toggle} alt="" style={{ width: 20, height: 20 }}onClick={() => handleDeleteProduct(product.id)} />
              </Span>
              </div>
            </Td>
          </Tr>
        ))
      ) : (
        <Tr>
          <Td colSpan={6}>No hay productos disponibles.</Td>
        </Tr>
      )}
    </Tbody>
  );
};

export { TableBody };