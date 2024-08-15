'use client'
import Form from '@/components/form/form.component';
import styled from 'styled-components';
import { Kaushan_Script } from 'next/font/google';

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: '400',
});

const MainComponent = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`
const Container = styled.div`
    width: 720px;
    margin: 0 auto;
    padding: 50px;
    background-color: #e2c99f;
    color: #000;
    border-radius: 15px;
    border: 1px #454545 solid;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
   
    h2 {
      font-family: ${kaushan.style.fontFamily};
      font-style: normal;
      font-size: 50px;
      text-align: center;
      margin-bottom: 20px;
    }
`

export default function CreateProduct() {
    return (
      <MainComponent>
        <Container>
          <h2>Crear Producto</h2>
          <Form />
        </Container>
      </MainComponent>
    );
  }
  