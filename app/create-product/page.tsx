'use client';

import React from 'react';
import styled from 'styled-components';
import { Kaushan_Script } from 'next/font/google';
import Form from '@/components/form/form.component';
import { GlobalTheme } from '../GlobalStyling';

const kaushan = Kaushan_Script({
  subsets: ['latin'],
  weight: '400',
});

const Title = styled.h2`
  font-family: ${kaushan.style.fontFamily};
  font-style: normal;
  font-size: 50px;
  text-align: center;
  margin-bottom: 20px;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  width: 720px;
  margin: 100px auto;
  padding: 50px;
  background-color: ${GlobalTheme.colors.widgetsQuaternary};
  color: ${GlobalTheme.colors.textTertiary};
  border-radius: 15px;
  box-shadow: 0px 2px 4px ${GlobalTheme.colors.textQuaternary};
  box-sizing: border-box;
`;

const CreateProduct: React.FC = () => {
  return (
    <Section>
      <Container>
        <Title>Crear Producto</Title>
        <Form />
      </Container>
    </Section>
  );
}

export default CreateProduct;
