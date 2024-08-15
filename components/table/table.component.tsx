"use client";
import styled from "styled-components";
import { Product } from "@/models/product.model";
import { getProducts } from "@/utilities/get-products.utility";
import { useEffect, useState } from "react";
import Image from "next/image";

//Implementation of Styled Component

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
`
const Table = styled.table`
  background-color: lightblue;
`
const Thead = styled.thead`
  border-radius: 3px;
`
const Tbody = styled.tbody`
  background-color: #454545;
  border-radius: 3px;
`

const Tr = styled.tr`
  padding: 10px;
  border-radius: 3px;
`
const Th = styled.th`
  padding: 10px;
  border-radius: 3px;
  color: #fff;
`
const Td = styled.td`
  padding: 10px;
  border-radius: 3px;
  color: #fff;
`

export default function TableComponent() {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(()=> {
      localStorage.setItem('products', JSON.stringify([
        {
          id: 1,
          title: 'Producto 1',
          description: 'Descripción del producto 1',
          price: 100,
          image: '/next.svg'
        },
        {
          id: 2,
          title: 'Producto 2',
          description: 'Descripción del producto 2',
          price: 200,
          image: '/vercel.svg'
        },
        {
          id: 3,
          title: 'Producto 3',
          description: 'Descripción del producto 3',
          price: 300,
          image: '/vercel.svg'
        }
      ]));
      
      

      const productsList = getProducts()
      if(productsList){
        setProducts(productsList)
      }
    }, [])


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
              <Tr>
                <Td>{product.id}</Td>
                <Td>{product.title}</Td>
                <Td>{product.price}</Td>
                <Td>{product.description}</Td>
                <Td>
                  <Image src={product.image} alt="" width={100} height={100}/>
                </Td>
              </Tr>
            )
          })}
    
        </Tbody>
      </Table>
      </Main>
    );
  }

