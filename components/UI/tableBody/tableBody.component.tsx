// components/table/TableBody.tsx
import styled from "styled-components";
import { Product } from "@/models/product.model";
import Image from "next/image";
import { TableBodyProps } from "@/models/tableBody";

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

export function TableBody({ products }: TableBodyProps) {
  return (
    <Tbody>
      {products.length > 0 ? (
        products.map((product: Product) => (
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
          </Tr>
        ))
      ) : (
        <Tr>
          <Td colSpan={5}>No hay productos disponibles</Td>
        </Tr>
      )}
    </Tbody>
  );
}
