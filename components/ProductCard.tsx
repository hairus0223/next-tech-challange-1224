import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/ProductType";
import ProductLabel from "@/components/ProductLabel";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, thumbnail, title, price } = product;

  return (
    <Link href={`/product/${id}`}>
      <div className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black">
        <Image
          src={thumbnail}
          alt={title}
          width={300}
          height={200}
          className="h-full w-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          quality={80}
        />
        <ProductLabel
          title={title}
          amount={price.toString()}
          currencyCode="USD"
          position="bottom"
        />
      </div>
    </Link>
  );
};

export default ProductCard;
