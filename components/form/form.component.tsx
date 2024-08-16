'use client'
import React, { useState } from "react"
import Input from "@/components/UI/input/input.ui"
import Textarea from "@/components/UI/textarea/textarea.ui"
import ButtonCreate from "@/components/UI/buttonCreate/buttonCreate.ui"
import ButtonClear from "@/components/UI/buttonClear/buttonClear.ui"
import styled from "styled-components"
import { setProduct } from "@/utilities/set-product.utility"
import { Product } from "@/models/product.model"
import Swal from "sweetalert2"
import { GlobalTheme } from "@/app/GlobalStyling";

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    button {
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        background-color: ${GlobalTheme.colors.bgTertiary};
        color: ${GlobalTheme.colors.textPrimary};
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-weight: bold;
    }

    button:hover {
        opacity: .8;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
    }

    input{
        padding: 10px;
        border-radius: 10px;
        border: none;
    }

    textarea {
        height: 100px;
        resize: none;
        padding: 10px;
        border-radius: 8px;
        border: none;
    }

    input:focus, textarea:focus, button:focus {
        outline: none;
        border-color: ${GlobalTheme.colors.textTertiary};
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

    const defaultImageUrl = "/next.svg";

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
            confirmButtonText: 'Aceptar',
            didClose: () => {   window.location.href='/products'; }
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
            <ButtonCreate type="submit" label="Guardar" />
            <ButtonClear type="button" label="Limpiar" onClick={resetInput} />
        </FormContainer>
    )
}

export default Form;