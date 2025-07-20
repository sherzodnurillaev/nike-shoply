'use client'

import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext"

const data = ["buy", "like"]

interface Type {
    id: number
}

const ProButton = ({ id }: Type) => {
    const {buyList, setBuyList, favorites, setFavorites, toggleBuy, toggleFavorite } = useCart();

    return (
        <div className="flex justify-between">
            <button className="relative !px-[20px] md:!px-[30px] lg:!px-[50px] !py-[5px] bg-[#000] rounded-[20px] sm:text-[16px] md:text-[18px] lg:text-[20px] cursor-pointer hover:text-red-700"
                onClick={() => toggleBuy(id)}
            >
                {buyList.includes(id) ? 'Added to Cart' : 'Buy'}
            </button>
            <button className="relative !px-[20px] !py-[5px] bg-[#000] rounded-[20px] cursor-pointer hover:text-red-700"
                onClick={() => toggleFavorite(id)}
            >
                {favorites.includes(id) ? 'Liked' : 'Like'}
            </button>
        </div>
    )
}

export default ProButton
