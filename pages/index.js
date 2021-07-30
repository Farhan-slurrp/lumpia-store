import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Menus from "../components/Menus";
import Gallery from "../components/Gallery";
import MoreInfo from "../components/MoreInfo";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-full bg-gray-300">
      <Navbar />
      <div
        id="banner"
        className="flex flex-col items-center justify-center w-full h-full px-5 pt-3 pb-5"
      >
        <Banner />
        <h1
          className="pt-12 mt-12 text-2xl font-bold font-merriweather"
          id="menu"
        >
          - MENU -
        </h1>
        <Menus />
        <h1
          className="pt-12 mt-12 text-2xl font-bold font-merriweather"
          id="galeri"
        >
          - GALERI -
        </h1>
        <Gallery />
        <h1
          className="pt-12 mt-12 text-2xl font-bold font-merriweather"
          id="lokasi"
        >
          - LOKASI -
        </h1>
        <div className="flex items-center justify-center p-2 my-12 bg-white rounded-md">
          <iframe
            width="850"
            height="450"
            loading="lazy"
            allowfullscreen
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.MY_API_KEY}
    &q=Kedai+lumpia+basah+ceuceu`}
          ></iframe>
        </div>
        <MoreInfo />
      </div>
    </div>
  );
}
