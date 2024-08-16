"use client";
import styled from "styled-components";
import { Product } from "@/models/product.model";
import { getProducts } from "@/utilities/get-products.utility";
import { useEffect, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
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

  const handleDelete = (id: number) => {
    Swal.fire({
      title: '¿Estás seguro de eliminar este producto?',
      text: 'No podrás recuperar el producto una vez eliminado.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
        Swal.fire({
          title: 'Producto eliminado',
          text: 'El producto ha sido eliminado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
      }
    });
  };

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
            <Th>ACCIONES</Th>
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
                  <Td>
                    <button onClick={() => handleDelete(product.id)}>Eliminar</button>
                  </Td>
                  
                </Tr>
              );
            })
          ) : (
            <Tr>
              <Td colSpan={6}>No hay productos disponibles</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </Main>
  );
}