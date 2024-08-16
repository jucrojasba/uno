// components/table/TableComponent.tsx
"use client";
import styled from "styled-components";
import { Product } from "@/models/product.model";
import { getProducts } from "@/utilities/get-products.utility";
import { useEffect, useState } from "react";
import { TableHead } from "../UI/tableHead/tableHead.ui";
import { TableBody } from "../UI/tableBody/tableBody.ui";
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
export default function TableComponent() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productsList = getProducts();
    if (productsList) {
      setProducts(productsList);
    }
  }, []);

  const columns = ["ID", "NOMBRE", "PRECIO", "DESCRIPCIÓN", "IMG","FUNCIONES"];

  return (
    <Main>
      <Table>
        <TableHead columns={columns} />
        <TableBody products={products} />
      </Table>
    </Main>
  );
}
