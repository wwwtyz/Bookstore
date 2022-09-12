import React from "react";
import { fetchBooks } from "../../api/fetchBooks";
import CartCard from "../../components/CartCard/CartCard";
import { Book } from "../Bookpage/BookPage";
import { FetchBookResponse } from "../MainPage/MainPage";

export default function CartPage() {
  const bookArr = [
    {
      error: "0",
      title: "Securing DevOps",
      subtitle: "Security in the Cloud",
      authors: "Julien Vehent",
      publisher: "Manning",
      isbn10: "1617294136",
      isbn13: "9781617294136",
      pages: "384",
      year: "2018",
      rating: "5",
      desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
      price: "$26.98",
      image: "https://itbook.store/img/books/9781617294136.png",
      url: "https://itbook.store/books/9781617294136",
      pdf: {
        "Chapter 2": "https://itbook.store/files/9781617294136/chapter2.pdf",
        "Chapter 5": "https://itbook.store/files/9781617294136/chapter5.pdf",
      },
    },
    {
      error: "0",
      title: "The Definitive Guide to MongoDB, 3rd Edition",
      subtitle: "A complete guide to dealing with Big Data using MongoDB",
      authors: "David Hows, Eelco Plugge, Peter Membrey, Tim Hawkins",
      publisher: "Apress",
      language: "English",
      isbn10: "1484211839",
      isbn13: "9781484211830",
      pages: "376",
      year: "2015",
      rating: "4",
      desc: "The Definitive Guide to MongoDB, Third Edition, is updated for MongoDB 3 and includes all of the latest MongoDB features, including the aggregation framework introduced in version 2.2 and hashed indexes in version 2.4. The Third Edition also now includes Node.js along with Python.MongoDB is the most...",
      price: "$49.99",
      image: "https://itbook.store/img/books/9781484211830.png",
      url: "https://itbook.store/books/9781484211830",
    },
  ];
  return (
    <div>
      <h1>Your Cart</h1>
      <div>
        {bookArr.map((book) => (
          <CartCard book={book} key={book.isbn13} />
        ))}
      </div>
    </div>
  );
}
