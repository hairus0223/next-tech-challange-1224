"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CarouselThumbnail } from "./CarouselThumbnail";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const buttonClassName =
    "h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center";

  return (
    <>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {images[currentIndex] && (
          <Image
            src={images[currentIndex]}
            alt={`Product Image ${currentIndex + 1}`}
            className="h-full w-full object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            priority={true}
          />
        )}

        {images.length > 1 ? (
          <div className="absolute bottom-[15%] flex w-full justify-center">
            <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
              <button
                onClick={handlePrev}
                aria-label="Previous product image"
                className={buttonClassName}
              >
                &larr;
              </button>
              <div className="mx-1 h-6 w-px bg-neutral-500"></div>
              <button
                onClick={handleNext}
                aria-label="Next product image"
                className={buttonClassName}
              >
                &rarr;
              </button>
            </div>
          </div>
        ) : null}
      </div>
      {images.length > 1 ? (
        <ul className="my-12 flex items-center flex-wrap justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {images.map((image, index) => {
            const isActive = index === currentIndex;

            return (
              <li key={image} className="h-20 w-20">
                <button
                  onClick={() => setCurrentIndex(index)}
                  aria-label="Select product image"
                  className="h-full w-full"
                >
                  <CarouselThumbnail
                    alt={`Product Image ${index + 1}`}
                    src={image}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};

export default Carousel;
