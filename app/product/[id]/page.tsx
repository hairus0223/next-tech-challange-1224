import Carousel from "@/components/Carousel";
import { fetchProductById } from "@/services/ProductService";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProductById(params.id);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <Carousel images={product.images} />
      <p className="text-lg">{product.description}</p>
      <p className="text-xl font-semibold">${product.price}</p>
      <span
        className={`badge ${product.stock > 0 ? "bg-green-500" : "bg-red-500"}`}
      >
        {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}
