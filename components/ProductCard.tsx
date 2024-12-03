import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/ProductType";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={200}
          className="object-cover rounded"
        />
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
