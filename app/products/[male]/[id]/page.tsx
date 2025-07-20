import ProductId from "@/components/Product/ProductId";

interface PageProps {
  params: {
    male: string;
    id: string;
  };
}

const ProductPage = ({ params }: PageProps) => {
     
  return (
    <div className="max-w-[1300px] !mx-auto !px-[20px] !mt-[50px]">
        <ProductId id={params.id} />
    </div>
  );
};

export default ProductPage;
