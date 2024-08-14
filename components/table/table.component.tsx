import styled from 'styled-components';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from 'react';


interface Product {
  id: number;
  name: string;
  price: number;
}


const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1500px;
  height: 100vh;
  margin: auto;
  border: 1px solid black;
  `

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: lightblue;

  /* justify-content: space-between; */
  justify-content: center;
  gap: 5rem;
  align-items: center;
  width: 30%;
  padding: 20px;
  border: 1px solid black;
  border-radius: 6px;
  margin-bottom: 2rem;
`
const DivFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const DivForm = styled.div`
  display: flex;
  flex-direction: column;
`
const InputForm = styled.input`
  padding: 1rem;
  border-radius: 4px;
  width: 99%;
  box-sizing: border-box;
`

const Button = styled.button`
  padding: 10px 20px;
  background-color: greenyellow;
  border: 1px solid black;
  border-radius: 3px;
  cursor: pointer;
  `

const Thead = styled.thead`
  background-color: gray;
  border-radius: 3px;
  border: 1px solid black;
`
const Tbody = styled.tbody`
  background-color: lightblue;
  border-radius: 3px;
  border: 1px solid black;
`

const Tr = styled.tr`
  padding: 10px;
  border-radius: 3px;
  border: 1px solid black;
`
const Th = styled.th`
  padding: 10px;
  border-radius: 3px;
  border: 1px solid black;
  color: #fff;
  font-family: 'verdana';
`
const Td = styled.td`
  padding: 10px;
  border-radius: 3px;
  border: 1px solid black;
`


export default function Page() {

  const storedProducst = localStorage.getItem('products');
  let products;

  if (storedProducst){
    products = JSON.parse(storedProducst);
  }

  const [name, setName] = useState()
  const [price, setPrice] = useState()

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  }
  const handleChangePrice = (e: any) => {
    setPrice(e.target.value)
  }

  const handleClickButton = (e: any) => {
    e.preventDefault();
    // Aquí se envía la información al backend
    let newProduct = {
      id: Date.now(),
      name,
      price
    }
    products.push(newProduct);
  }



  return (
    <Main >
      <Form>
        <DivFormContainer>
          <DivForm>
            <label htmlFor="">Nombre</label>
            <InputForm onChange={(e) => handleChangeName(e)} type="text" placeholder='Ingresa el nombre del producto' />
          </DivForm>
          <DivForm>
            <label htmlFor="">Precio</label>
            <InputForm onChange={(e) => handleChangePrice(e)} type="text" placeholder='Ingresa el precio del producto'/>
          </DivForm>
        </DivFormContainer>
        <Button>Agregar Producto</Button>
      </Form>
      <table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>NOMBRE</Th>
            <Th>PRECIO</Th>
            <Th>EDITAR</Th>
            <Th>ELIMINAR</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>Computador</Td>
            <Td>3000</Td>
            <Td>
              <FaEdit />
            </Td>
            <Td>
              <FaTrash />
            </Td>
          </Tr>
        </Tbody>
      </table>
    </Main>
  );
}