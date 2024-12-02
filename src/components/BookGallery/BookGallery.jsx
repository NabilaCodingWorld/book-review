import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";

const BookGallery = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <center className="text-2xl font-bold my-10"> Books</center>

      <div className="grid md:grid-cols-3 gap-10 m-20">
        {books.map((book) => (
          <Gallery key={book.id} book={book}></Gallery>
        ))}
      </div>
    </div>
  );
};

export default BookGallery;
