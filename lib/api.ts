import axios from "axios"

export const fetchProducts = async () => {
    try {
        const res = await axios.get("/api/products.json");
        return res.data;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
    }
};
