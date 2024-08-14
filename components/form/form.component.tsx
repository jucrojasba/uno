'use client'
import React from "react"
import Input from "@/components/input/input.component"
import Textarea from "@/components/textarea/textarea.component"
import Button from "@/components/button/button.component"
import styled from "styled-components"

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
    return (
        <Container>
            <h2>Crear Producto</h2>
            <form>
                <Input type="text" placeholder="Título" id="title" />
                <Textarea placeholder="Descripción" id="description" />
                <Input type="number" placeholder="Precio" id="price" />
                <Input type="url" placeholder="URL Imagen" id="image" />
                <Button type="submit" label="Guardar" />
            </form>
        </Container>
    )
}

export default Form
