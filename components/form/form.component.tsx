'use client'
import React, { useState } from "react"
import Input from "@/components/form/input/input.component"
import Textarea from "@/components/form/textarea/textarea.component"
import Button from "@/components/form/button/button.component"
import styled from "styled-components"
import { setProduct } from "@/utilities/set-product.utility"
import { Product } from "@/models/product.model"

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    h2 {
        margin-bottom: 20px;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    button {
        width: 100%;
    }
    input, textarea, button {
        width: 100%;
    }
    input:focus, button:focus {
        outline: none;
        border-color: black;
    }
`

function Form() {
    const newProduct: Product = {
        id: Date.now(), 
        title: '',
        description: '',
        price: 0,
        image: '',
    };

    const defaultImageUrl = "https://as.com/epik/imagenes/2020/11/23/portada/1606131668_330819_1606132209_miniatura_normal.jpg";

    const [product, setProductState] = useState(newProduct);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setProductState({...product, [id]: value});
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const productToSave: Product = {
            ...product,
            image: product.image || defaultImageUrl,
        };

        setProduct(productToSave);

        setProductState(newProduct);
    };

    return (
        <Container>
            <h2>Crear Producto</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Título"
                    id="title"
                    value={product.title}
                    onChange={handleChange}
                />
                <Textarea
                    placeholder="Descripción"
                    id="description"
                    value={product.description}
                    onChange={handleChange}
                />
                <Input
                    type="number"
                    placeholder="Precio"
                    id="price"
                    value={String(product.price)}
                    onChange={handleChange}
                />
                <Input
                    type="url"
                    placeholder="URL Imagen"
                    id="image"
                    value={product.image}
                    onChange={handleChange}
                />
                <Button type="submit" label="Guardar" />
            </form>
        </Container>
    )
}

export default Form;
