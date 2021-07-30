import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/gallery/g1.jpeg",
  "/images/gallery/g2.jpeg",
  "/images/gallery/g3.jpeg",
  "/images/gallery/g4.jpeg",
  "/images/gallery/g5.jpeg",
];

const Gallery = () => {
  const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

  useEffect(() => {
    const intervalId = setInterval(() => {
      slideRight();
    }, [3000]);

    return () => clearInterval(intervalId);
  }, [index]);

  const slideRight = () => {
    setIndex((index + 1) % images.length); // increases index by 1
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1); // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-12">
      <button onClick={slideLeft} className="p-1 text-3xl font-bold text-black">
        {"<"}
      </button>
      <div className="flex flex-col">
        <div className="flex items-center justify-center p-2 bg-white rounded-md">
          <Image
            layout="intrinsic"
            width={440}
            height={500}
            src={images[index]}
            alt={index}
          />
        </div>
        <div className="flex items-center justify-center w-full gap-2">
          {images.map((_, i) => (
            <p
              className={`${
                i == index ? "text-black" : "text-white"
              } text-6xl text-bold`}
            >
              .
            </p>
          ))}
        </div>
      </div>

      <button
        onClick={slideRight}
        className="p-1 text-3xl font-bold text-black"
      >
        {">"}
      </button>
    </div>
  );
};

export default Gallery;
