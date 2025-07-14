"use client";

import { fetchProducts } from "@/lib/api";
import { useEffect, useState } from "react";

interface ProductIdProps {
  id: string;
}

interface Product {
  id: number;
  model: string;
  descriptions: string;
  category: string;
  pictures: string[];
  color: string;
  size: string[];
  male: "men" | "women" | "kids";
  price: number;
}


const ProductId = ({ id }: ProductIdProps) => {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetchProducts().then((products: Product[]) => {
        const prod = products.find((p) => p.id === Number(id));
        setProduct(prod || null);
    });
  }, [id]);

  console.log(product);
  

  if (!product) return <p>Загрузка...</p>;

  return (
    <div>
      <h1>Nike {product.model}</h1>
      <p>{product.descriptions}</p>
    </div>
  );
};

export default ProductId;
