import React, { useEffect, useState } from 'react';
import { getProducts} from '@/utilities/get-products.utility';
import { Product } from '@/models/product.model';

// Componente ProductPage
const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const storedProducts = getProducts();
        setProducts(storedProducts);
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <Table products={products} />
        </div>
    );
};

export default ProductPage;
