const MoreInfo = () => {
  return (
    <div className="flex flex-col justify-between flex-grow w-full gap-12 px-6 py-5 mx-5 mt-8 mb-4 bg-green-600 rounded-md md:w-2/3">
      <h1 className="text-3xl text-white font-karla">
        Untuk info Lebih lanjut hubungi:
      </h1>
      <div className="flex flex-col gap-2">
        <p className="text-xl text-white font-karla">📱 0856-7537-199</p>
        <a href="tel:+628567537199">
          <button className="px-5 py-2 font-semibold bg-white rounded-sm cursor-pointer text-karla">
            TELEPON
          </button>
        </a>
      </div>
    </div>
  );
};

export default MoreInfo;
