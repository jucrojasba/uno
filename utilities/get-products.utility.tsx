import { Product } from "@/models/product.model";

export async function getProducts(): Promise<Product[]> { 
    const products = localStorage.getItem('products'); return products ? JSON.parse(products) : []; 
} 