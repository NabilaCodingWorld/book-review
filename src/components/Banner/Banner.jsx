import React from "react";
import img from "../../assets/kid-escape-from-scary-candy-house-poster_197582-162.jpg";

const Banner = () => {
  return (
    <div className=" grid grid-cols-2 m-20 bg-gray-100 p-20 rounded-lg gap-10 items-center">
      <div>
        <h1 className="text-5xl font-semibold">
          Books to freshen up <br /> your bookshelf
        </h1>
      </div>
      <img className="w-96" src={img} alt="" />
    </div>
  );
};

export default Banner;
