import { Product } from "@/models/product.model";

export function getProducts(): Product[] { 
    const products = localStorage.getItem('products'); return products ? JSON.parse(products) : []; 
} 