import clsx from "clsx";
import Image from "next/image";
import ProductLabel from "./ProductLabel";

interface LabelProps {
  title: string;
  amount: string;
  currencyCode: string;
  position?: "bottom" | "center";
}

interface CarouselThumbnailProps extends React.ComponentProps<typeof Image> {
  isInteractive?: boolean;
  active?: boolean;
  label?: LabelProps;
}

export function CarouselThumbnail({
  isInteractive = true,
  active = false,
  label,
  ...props
}: CarouselThumbnailProps) {
  return (
    <div
      className={clsx(
        "group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black",
        {
          relative: !!label,
          "border-2 border-blue-600": active,
          "border-neutral-200 dark:border-neutral-800": !active,
        }
      )}
    >
      {props.src && (
        <Image
          className={clsx(
            "relative h-full w-full object-contain",
            isInteractive &&
              "transition duration-300 ease-in-out group-hover:scale-105"
          )}
          {...props}
        />
      )}
      {label && (
        <ProductLabel
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
        />
      )}
    </div>
  );
}
