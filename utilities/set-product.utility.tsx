import { Product } from "@/models/product.model";
import { getProducts } from "./get-products.utility";

export function setProduct(product:Product):void{
    const products = getProducts(); 
    products.push(product); 
    localStorage.setItem('products', JSON.stringify(products));
}