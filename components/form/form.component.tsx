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

const ColspanInputs = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        label {
            align-self: start;
            margin-bottom: 10px;
        }
    }
}
    `

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    label {
            align-self: start;
        }
`

function Form() {
    const newProduct: Product = {
        id: Date.now(),
        title: '',
        description: '',
        price: 0,
        tag: '',
        image: '',
    };

    const defaultImageUrl = "/next.svg";

    const [product, setProductState] = useState(newProduct);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setProductState({ ...product, [id]: value });
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
            icon: 'success',
            confirmButtonText: 'Aceptar',
            didClose: () => { window.location.href = '/products'; }
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
            <ColspanInputs>
                <div>
                    <Input
                        type="number"
                        placeholder="Precio"
                        id="price"
                        value={String(product.price)}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        placeholder="Tag"
                        id="tag"
                        value={String(product.tag)}
                        onChange={handleChange}
                        required
                    />
                </div>
            </ColspanInputs>
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