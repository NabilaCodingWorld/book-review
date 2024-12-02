import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Gallery = ({ book }) => {
  const { id, image, category, bookName, author, rating } = book;
  return (
    <Link to={`/bookDetails/${id}`}>
      <div className="space-y-4 border-2 p-8 rounded-lg">
        <img
          className=" w-56 h-72 bg-gray-100 p-6 rounded-lg"
          src={image}
          alt=""
        />

        <button className="btn btn-sm text-[#23BE0A] mr-4">YoungAdult</button>
        <button className="btn btn-sm text-[#23BE0A]">Identity</button>

        <p className="font-semibold text-lg">{bookName}</p>
        <p className="text-gray-500">
          By: <span>{author}</span>
        </p>
        <p className="text-gray-400">
          ---------------------------------------------
        </p>

        <div className="grid grid-cols-2 gap-10 text-gray-500">
          <p>{category}</p>
          <div className="flex gap-2 items-center">
            <p>{rating}</p>

            <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Gallery;
