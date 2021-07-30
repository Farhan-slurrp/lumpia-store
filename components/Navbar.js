import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 flex flex-col w-full">
      <div className="z-50 flex justify-between w-full p-5 px-12 shadow-md backdrop-blur-3xl backdrop-filter">
        <div className="flex items-center justify-center">
          <Image
            src={`${!isOpen ? "/nav-ic.png" : "/nav-close-ic.png"}`}
            width={`${!isOpen ? "25" : "20"}`}
            height="18"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <a href="#banner" className="text-xl font-semibold">
          Lumpia Basah Ceuceu
        </a>
      </div>
      {isOpen && (
        <div className="absolute flex flex-col items-center w-2/3 h-screen gap-3 pt-20 shadow-lg md:w-1/4 backdrop-blur-3xl backdrop-filter -z-0">
          <a
            href="#menu"
            className="flex justify-center w-full p-2 text-xl font-karla"
          >
            Menu
          </a>
          <a
            href="#galeri"
            className="flex justify-center w-full p-2 text-xl font-karla"
          >
            Galeri
          </a>
          <a
            href="#lokasi"
            className="flex justify-center w-full p-2 text-xl font-karla"
          >
            Lokasi
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
