import Carousel from "@/components/Carousel";
import Price from "@/components/ui/Price";
import { fetchProductById } from "@/services/ProductService";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProductById(params.id);

  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
        <div className="h-full w-full basis-full lg:basis-4/6">
          <Carousel images={product.images} />
        </div>
        <div className="basis-full lg:basis-2/6">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-medium">{product.title}</h1>

            <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
              <Price amount={product.price} />
            </div>
            <div className="text-sm leading-tight dark:text-white/[60%] text-justify">
              {product.description}
            </div>
            <span
              className={`badge rounded-sm p-2 text-sm ${
                product.stock > 0 ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
