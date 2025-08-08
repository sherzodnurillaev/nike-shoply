import ProductId from "@/components/Product/ProductId";

export default function ProductPage({ params }: any) {
  return (
    <div className="max-w-[1300px] !mx-auto !px-[20px] !mt-[20px] md:!mt-[50px]">
      <ProductId id={params.id} />
    </div>
  );
}
