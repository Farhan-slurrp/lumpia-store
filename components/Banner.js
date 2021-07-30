import Image from "next/image";
import ReactTooltip from "react-tooltip";

const Banner = () => {
  return (
    <div className="flex justify-between flex-grow w-full gap-3 px-6 py-5 mx-5 bg-green-600 rounded-md md:w-2/3">
      <div className="flex flex-col justify-between w-full">
        <h1 className="text-5xl font-semibold text-white font-karla">
          KEDAI LUMPIA BASAH CEUCEU
        </h1>
        <p className="text-xl text-white">
          Toko Makanan Sehat Perumnas 1, Jalan Cemara Raya no. 53
          Kec.Parungpanjang Kel.Cibunar Kab.Bogor, Bogor, Jawa Barat
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/kedaiceuceu_/"
            target="_blank"
            data-tip
            data-for="ig"
            className="cursor-pointer"
          >
            <Image src="/images/ig.png" width="30" height="30" />
          </a>
          <ReactTooltip id="ig" effect="solid" place="bottom" type="info">
            <span>@kedaiceuceu_</span>
          </ReactTooltip>
          <a
            href="https://wa.me/628567537199"
            target="_blank"
            data-tip
            data-for="wa"
            className="cursor-pointer"
          >
            <Image src="/images/wa.png" width="30" height="30" />
          </a>
          <ReactTooltip id="wa" effect="solid" place="bottom" type="info">
            <span>0856-7537-199</span>
          </ReactTooltip>
        </div>
      </div>
      <Image src="/images/lumpia-banner.jpg" width="250" height="300" />
    </div>
  );
};

export default Banner;
