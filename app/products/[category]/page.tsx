
interface PageProps {
  params: { category: string }
}

const products = ({params}: PageProps) => {
    const {category} = params;
    return (
        <>
            <h1>Категория: {category}</h1>
        </>
    )
}

export default products
