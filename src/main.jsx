import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Home from "./components/Home/Home.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import PageToRead from "./components/PageToRead/PageToRead.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/book.json"),
      },
      {
        path: "/pageToRead",
        element: <PageToRead></PageToRead>,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../book.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
