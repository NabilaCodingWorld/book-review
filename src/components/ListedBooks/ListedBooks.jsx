import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const ListedBooks = () => {
  const books = useLoaderData();

  const [activeTab, setActiveTab] = useState("read");
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [sortField, setSortField] = useState(""); // State for the selected sort field

  const sortBooks = (books, field) => {
    if (!field) return books;
    return [...books].sort((a, b) => {
      if (a[field] > b[field]) return -1;
      if (a[field] < b[field]) return 1;
      return 0;
    });
  };

  useEffect(() => {
    const read = JSON.parse(localStorage.getItem("read")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (books && books.length > 0) {
      setReadBooks(
        sortBooks(
          read
            .map((id) => books.find((b) => b.id.toString() === id.toString()))
            .filter(Boolean),
          sortField
        )
      );
      setWishlistBooks(
        sortBooks(
          wishlist
            .map((id) => books.find((b) => b.id.toString() === id.toString()))
            .filter(Boolean),
          sortField
        )
      );
    }
  }, [books, sortField]); // Re-sort when the sortField changes

  const handleSortChange = (e) => {
    setSortField(e.target.value);
  };

  return (
    <div className="p-8">
      <header>
        <center className="text-2xl font-bold my-10">My Books</center>
      </header>

      <select
        className="select select-bordered w-full max-w-xs ml-96 mb-10"
        value={sortField}
        onChange={handleSortChange}
      >
        <option value="">Sort By</option>
        <option value="bookName">Book Name</option>
        <option value="author">Author</option>
        <option value="yearOfPublishing">Year of Publishing</option>
        <option value="rating">Rating</option>
      </select>

      <div className="tabs flex justify-center gap-4 mb-8">
        <button
          className={`tab -p-4 rounded ${
            activeTab === "read"
              ? "bg-blue-500 text-white font-bold border border-blue-500"
              : "bg-gray-200 text-gray-800 border border-gray-300"
          }`}
          onClick={() => setActiveTab("read")}
        >
          Read Books {activeTab === "read" && <span>✓</span>}
        </button>
        <button
          className={`tab p rounded ${
            activeTab === "wishlist"
              ? "bg-blue-500 text-white font-bold border border-blue-500"
              : "bg-gray-200 text-gray-800 border border-gray-300"
          }`}
          onClick={() => setActiveTab("wishlist")}
        >
          Wishlist Books {activeTab === "wishlist" && <span>✓</span>}
        </button>
      </div>

      <div className="mt-8">
        {activeTab === "read" && (
          <div>
            {readBooks.length > 0 ? (
              readBooks.map((book) => (
                <div
                  key={book.id}
                  className="p-8 border rounded mb-4 grid md:grid-cols-2 gap-20 items-center"
                >
                  <img
                    className="w-56 bg-gray-100 p-5 rounded-lg"
                    src={book.image}
                    alt=""
                  />
                  <div className="space-y-4">
                    <h1 className="font-bold">{book.bookName}</h1>
                    <p>By: {book.author}</p>
                    <p>
                      <span className="font-bold">Tags: </span>
                      {book.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="mx-2 text-green-600 font-semibold"
                        >
                          #{tag}
                        </span>
                      ))}
                    </p>
                    <p>Year of Publishing: {book.yearOfPublishing}</p>
                    <div className="flex gap-5 text-gray-500">
                      <p>Publisher: {book.publisher}</p>
                      <p>Page: {book.totalPages}</p>
                    </div>
                    <hr className="my-5" />
                    <button className="btn btn-sm">
                      Category: {book.category}
                    </button>
                    <button className="btn btn-sm">
                      Rating: {book.rating}
                    </button>
                    <button className="btn btn-success btn-sm text-white">
                      View Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No books in the "Read" list yet.</p>
            )}
          </div>
        )}

        {activeTab === "wishlist" && (
          <div>
            {wishlistBooks.length > 0 ? (
              wishlistBooks.map((book) => (
                <div
                  key={book.id}
                  className="p-8 border rounded mb-4 grid md:grid-cols-2 gap-20 items-center"
                >
                  <img
                    className="w-56 bg-gray-100 p-5 rounded-lg"
                    src={book.image}
                    alt=""
                  />
                  <div className="space-y-4">
                    <h1 className="font-bold">{book.bookName}</h1>
                    <p>By: {book.author}</p>
                    <p>
                      <span className="font-bold">Tags: </span>
                      {book.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="mx-2 text-green-600 font-semibold"
                        >
                          #{tag}
                        </span>
                      ))}
                    </p>
                    <p>Year of Publishing: {book.yearOfPublishing}</p>
                    <div className="flex gap-5 text-gray-500">
                      <p>Publisher: {book.publisher}</p>
                      <p>Page: {book.totalPages}</p>
                    </div>
                    <hr className="my-5" />
                    <button className="btn btn-sm">
                      Category: {book.category}
                    </button>
                    <button className="btn btn-sm">
                      Rating: {book.rating}
                    </button>
                    <button className="btn btn-success btn-sm text-white">
                      View Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No books in the "Wishlist" list yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListedBooks;
