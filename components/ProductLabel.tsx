import clsx from "clsx";
import Price from "@/components/ui/Price";

interface ProductLabelProps {
  title: string;
  amount: string;
  currencyCode: string;
  position?: "bottom" | "center";
}

const ProductLabel: React.FC<ProductLabelProps> = ({
  title,
  amount,
  currencyCode,
  position = "bottom",
}) => {
  const containerClasses = clsx(
    "absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label",
    { "lg:px-20 lg:pb-[35%]": position === "center" }
  );

  const labelClasses = clsx(
    "flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md",
    "dark:border-neutral-800 dark:bg-black/70 dark:text-white"
  );

  const priceClasses = clsx(
    "flex-none rounded-full bg-blue-600 p-2 text-white"
  );

  return (
    <div className={containerClasses}>
      <div className={labelClasses}>
        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
          {title}
        </h3>
        <Price
          className={priceClasses}
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default ProductLabel;
