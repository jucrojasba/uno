import { Product } from "@/models/product.model";
import { getProducts } from "./get-products.utility";

export async function setProduct(product:Product){
    const products = await getProducts(); 
    products.push(product); 
    localStorage.setItem('products', JSON.stringify(products));
}