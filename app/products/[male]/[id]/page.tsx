import ProductId from "@/components/Product/ProductId";

interface PageProps {
  params: {
    male: string;
    id: string;
  };
}

const ProductPage = ({ params }: PageProps) => {
     
  return (
    <div className="max-w-[1300px] !mx-auto !px-[20px]">
      <h1>Товар: {params.id}</h1>
      <ProductId id={params.id} />
    </div>
  );
};

export default ProductPage;
