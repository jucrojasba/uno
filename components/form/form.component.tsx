'use client'
import React, { useState } from "react"
import Input from "@/components/form/input/input.component"
import Textarea from "@/components/form/textarea/textarea.component"
import Button from "@/components/form/button/button.component"
import styled from "styled-components"
import { setProduct } from "@/utilities/set-product.utility"
import { Product } from "@/models/product.model"
import Swal from "sweetalert2"

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
        
    button {
        width: 100%;
        padding: 10px;
        background-color: #333;
        color: #fff;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

    button:hover {
        opacity: .7;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
    }

    input{
        padding: 10px;
        border-radius: 8px;
    }

    textarea {
        height: 100px;
        resize: none;
        padding: 10px;
        border-radius: 8px;
    }
    
    input:focus, textarea:focus, button:focus {
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

        Swal.fire({
            title: 'Producto Guardado',
            text: 'El producto se ha guardado correctamente.',
            icon:'success',
            confirmButtonText: 'Aceptar'
        })

        setProductState(newProduct);
    };

    const resetInput = () => {
        setProductState(newProduct);
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Título"
                id="title"
                value={product.title}
                onChange={handleChange}
                required
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
                required
            />
            <Input
                type="url"
                placeholder="URL Imagen"
                id="image"
                value={product.image}
                onChange={handleChange}
            />
            <Button type="submit" label="Guardar" />
            <Button type="button" label="Limpiar" onClick={resetInput} />
        </FormContainer>
    )
}

export default Form;
