import styled from "styled-components";
import { Product } from "@/models/product.model";
import Image from "next/image";
import { TableBodyProps } from "@/models/tableBody";
import React, { useState, useEffect } from 'react';
import { getProducts } from "@/utilities/get-products.utility"
import { handleDelete } from "../deleteButton/buttonDelete.ui"
import toggle from '@/public/assets/img/compartimiento.png'
import { Span } from "@/components/UI/deleteButton/buttonDelete.ui";
import StyledTagLink from "../links/tagsLink.ui";
import { FaEdit } from "react-icons/fa"
const Tbody = styled.tbody``;

const Tr = styled.tr`
  border: 1px solid ${({ theme }) => theme.pageColors.textTertiary};
`;

const Td = styled.td`
  padding: 10px;
  color: ${({ theme }) => theme.pageColors.textTertiary};
  background: ${({ theme }) => theme.pageColors.widgetsQuaternary};
  border-bottom: 3px solid ${({ theme }) => theme.pageColors.textPrimary};

  & div{
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);  /* Fondo semitransparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.pageColors.bgSecondary};  /* Fondo del modal */
  padding: 20px;
  border-radius: 12px;
  width: 80%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);  /* Sombra suave */
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  color: ${({ theme }) => theme.pageColors.textPrimary};  /* Color del botón de cerrar */
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.pageColors.textTertiary};  /* Color al pasar el mouse */
  }
`;

const FormButton = styled.button`
  background-color: ${({ theme }) => theme.pageColors.btnQuinary};  /* Fondo del botón */
  color: ${({ theme }) => theme.pageColors.textPrimary};  /* Texto del botón */
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.pageColors.btnSenary};  /* Cambia al color alternativo en hover */
  }
`;

interface ModalProps {
  show: boolean;
  onClose: () => void;
  product: Product;
  onSave: (updatedProduct: Product) => void;
}


const Modal = ({ show, onClose, product, onSave }: ModalProps) => {
  const [updatedProduct, setUpdatedProduct] = useState<Product>(product);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(updatedProduct);
  };

  if (!show) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label><br />
          <input type="text" id="title" name="title" value={updatedProduct.title} onChange={handleChange} /><br /><br />

          <label htmlFor="description">Description:</label><br />
          <input type="text" id="description" name="description" value={updatedProduct.description} onChange={handleChange} /><br /><br />

          <label htmlFor="price">Price:</label><br />
          <input type="number" id="price" name="price" value={updatedProduct.price} onChange={handleChange} /><br /><br />

          <label htmlFor="tag">Tag:</label><br />
          <input type="text" id="tag" name="tag" value={updatedProduct.tag} onChange={handleChange} /><br /><br />

          <label htmlFor="image">Image URL:</label><br />
          <input type="text" id="image" name="image" value={updatedProduct.image} onChange={handleChange} /><br /><br />

          <FormButton type="submit">Save</FormButton>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};
type HandleDeleteProduct = (id: number) => void;

const TableBody = ({ products }: TableBodyProps) => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsList = await getProducts();
        setProductsList(productsList);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);


  const handleDeleteProduct: HandleDeleteProduct = (id) => {
    handleDelete(id, setProductsList);
  };

  const handleEditClick = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleSaveProduct = async (updatedProduct: Product) => {
    const updatedProducts = products.map(p => p.id === updatedProduct.id ? updatedProduct : p);
    // setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    const fetchProducts = async () => {
      try {
        const productsList = await getProducts();
        setProductsList(productsList);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchProducts();
    handleModalClose();
  }

  if (loading) {
    return (
      <Tbody>
        <Tr>
          <Td colSpan={6}>Cargando...</Td>
        </Tr>
      </Tbody>
    );
  }

  if (error) {
    return (
      <Tbody>
        <Tr>
          <Td colSpan={6}>Error al cargar los productos.</Td>
        </Tr>
      </Tbody>
    );
  }

  return (
    <>
      {showModal && selectedProduct && (
        <Modal
          show={showModal}
          onClose={handleModalClose}
          product={selectedProduct}
          onSave={handleSaveProduct}
        />
      )}
      <Tbody>
        {productsList.length > 0 ? (
          productsList.map((product: Product) => (
            <Tr key={product.id}>
              <Td>{product.id}</Td>
              <Td>{product.title}
                <div>
                  <StyledTagLink href="#" label={product.tag}></StyledTagLink>
                </div></Td>
              <Td>{product.price}</Td>
              <Td>{product.description}</Td>
              <Td>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                />
              </Td>
              <Td>
                <div>
                  <Span onClick={() => handleDeleteProduct(product.id)}>
                    <Image src={toggle} alt="" style={{ width: 20, height: 20 }}  />

                  </Span>
                  <Span onClick={() => handleEditClick(product)}>
                    <i style={{ width: 20, height: 20 }}>
                      <FaEdit />
                    </i>

                  </Span>
                </div>
              </Td>
            </Tr>
          ))
        ) : (
          <Tr>
            <Td colSpan={6}>No hay productos disponibles.</Td>
          </Tr>
        )}
      </Tbody>
    </>
  );
};

export { TableBody }