import ProductList from "@/components/Category/Card";
import Fillter from "@/components/Category/Fillter";

interface PageProps {
  params: { male: string }
  searchParams: { category?: string }
}

const products = ({params, searchParams}: PageProps) => {
    const {male} = params;
    const {category} = searchParams;

    console.log(category);
    
    return (
        <div className="max-w-[1300px] !mx-auto !px-[20px] xl:!px-0">
            <Fillter category={category} />
            <ProductList male={male} category={category} />
        </div>
    )
}

export default products
