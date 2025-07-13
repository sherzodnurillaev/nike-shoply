'use client'

import { use } from "react";

interface PageProps {
    params: Promise<{ 
        male: String;
        id: String
    }>
}

const ProductPage = ({ params }: PageProps) => {
    const { male, id } = use(params);

    return (
        <>
            <h1>Товар: {id}</h1>
        </>
    )
}

export default ProductPage
