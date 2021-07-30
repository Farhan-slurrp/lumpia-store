import menu from "../utils/menu.json";
import Image from "next/image";

const Menus = () => {
  return (
    <div className="flex flex-wrap items-start justify-center w-full h-full gap-5 px-5 mt-10">
      {menu.map((item, i) => (
        <div
          className="flex flex-col w-full h-full p-2 bg-white rounded-md h-60 md:w-1/4"
          key={i}
        >
          <Image src={item.img} layout="responsive" width="10" height="10" />
          <h1 className="flex justify-center w-full mt-4 mb-6 text-2xl font-bold font-karla">
            {item.name}
          </h1>
          {item.types.map((type, idx) => (
            <div className="flex flex-col w-full gap-3 px-12 pb-6" key={idx}>
              <p className="flex text-lg font-karla">
                {type}: Rp.{item.prices[idx]}
              </p>
              <a
                href={`https://api.whatsapp.com/send/?phone=628567537199&text=Halo+kak,+saya+mau+pesan+${
                  item.name
                }+yang+${type.toLocaleLowerCase()}&app_absent=0`}
                target="_blank"
              >
                <button className="w-full px-4 py-1 font-semibold text-white rounded-sm bg-wa-color">
                  Pesan Sekarang
                </button>
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menus;
