
import { Product } from "@/models/product.model"
import { getProducts } from "@/utilities/get-products.utility"
import Swal from 'sweetalert2';
import styled from "styled-components";

export const handleDelete = (id: number, setProducts: (products: Product[]) => void) => {
  Swal.fire({
    title: '¿Estás seguro de eliminar este producto?',
    text: 'No podrás recuperar el producto una vez eliminado.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      const products = getProducts();
      const newProducts = products.filter((product) => product.id !== id);
      localStorage.setItem("products", JSON.stringify(newProducts));
      setProducts(newProducts);
      Swal.fire({
        title: 'Producto eliminado',
        text: 'El producto ha sido eliminado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    }
  });
};
const Span = styled.span`
    background-color: ${({ theme }) => theme.pageColors.widgetsQuaternary};
    padding: 20px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    width:15px;
    height:15px;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
`;

export { Span }