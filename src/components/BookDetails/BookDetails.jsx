import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const books = useLoaderData();

  const { id } = useParams();

  const book = books.find((b) => b.id === id);

  console.log(books);

  // Helper Functions
  const handleAddToList = (listName) => {
    const otherList = listName === "read" ? "wishlist" : "read";

    const list = JSON.parse(localStorage.getItem(listName)) || [];
    const other = JSON.parse(localStorage.getItem(otherList)) || [];

    if (list.includes(book.id)) {
      toast.warning(`"${book.bookName}" is already in your ${listName} list!`);
      return;
    }

    if (other.includes(book.id)) {
      toast.error(
        `You cannot add "${book.bookName}" to your ${listName} list as it's already in your ${otherList} list!`
      );
      return;
    }

    list.push(book.id);
    localStorage.setItem(listName, JSON.stringify(list));
    toast.success(`"${book.bookName}" added to your ${listName} list!`);
  };

  return (
    <div className="m-20 grid md:grid-cols-2 gap-20 items-center">
      <div className="bg-gray-100 p-20 rounded-lg">
        <img src={book.image} alt="" />
      </div>
      <div className="space-y-5">
        <p className="text-2xl font-bold">{book.bookName}</p>
        <p>By: {book.author}</p>
        <p>{book.category}</p>

        <p>
          <span className="font-bold">Review: </span>
          <span className=" text-gray-500">{book.review}</span>
        </p>

        <p>
          <span className="font-bold">Tags: </span>
          <span>
            {book.tags.map((tag, idx) => (
              <span className="mx-5 text-[#23BE0A] font-semibold" key={idx}>
                # {tag}
              </span>
            ))}
          </span>
        </p>

        <hr />

        <p>
          <span className="text-gray-500">Number of Pages:</span>
          <span className="font-semibold ml-20"> {book.totalPages} </span>
        </p>

        <p>
          <span className="text-gray-500">Publisher:</span>
          <span className="font-semibold ml-32"> {book.publisher} </span>
        </p>

        <p>
          <span className="text-gray-500">Year of Publishing:</span>
          <span className="font-semibold ml-20"> {book.yearOfPublishing} </span>
        </p>

        <p>
          <span className="text-gray-500">Rating:</span>
          <span className="font-semibold ml-40"> {book.rating} </span>
        </p>
        <button
          className="btn btn-outline mr-5 font-semibold"
          onClick={() => handleAddToList("read")}
        >
          Read
        </button>
        <button
          className="btn btn-info text-white font-semibold"
          onClick={() => handleAddToList("wishlist")}
        >
          Wishlist
        </button>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default BookDetails;
