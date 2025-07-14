import ProductId from "@/components/Product/ProductId";

interface PageProps {
  params: {
    male: string;
    id: string;
  };
}

const ProductPage = ({ params }: PageProps) => {
  return (
    <>
      <h1>Товар: {params.id}</h1>
      <ProductId id={params.id} />
    </>
  );
};

export default ProductPage;
