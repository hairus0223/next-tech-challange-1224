import clsx from "clsx";
import { formatCurrency } from "@/utils/formatter";

interface PriceProps extends React.ComponentProps<"p"> {
  amount: number | string;
  className?: string;
  currencyCode?: string;
  currencyCodeClassName?: string;
}

const Price: React.FC<PriceProps> = ({
  amount,
  className,
  currencyCode = "USD",
  currencyCodeClassName,
  ...props
}) => {
  return (
    <div
      suppressHydrationWarning
      className={clsx("flex items-baseline", className)}
      {...props}
    >
      {formatCurrency(Number(amount), currencyCode)}
      <span className={clsx("ml-1", currencyCodeClassName)}>
        {currencyCode}
      </span>
    </div>
  );
};

export default Price;
