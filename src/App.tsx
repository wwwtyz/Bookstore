import React from "react";
import { fetchBooks } from "./api/fetchBooks";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { AppThemeProvider } from "./contexts/AppThemeProvider/AppThemeProvider";
import { AppContainerBox } from "./MainLayout/layout.styled";
import { MainLayout } from "./MainLayout/MainLayout";
import { Book, BookPage } from "./pages/Bookpage/BookPage";

const book = {
  error: "0",
  title: "Securing DevOps",
  subtitle: "Security in the Cloud",
  authors: "Julien Vehent",
  publisher: "Manning",
  language: "English",
  isbn10: "1617294136",
  isbn13: "9781617294136",
  pages: "384",
  year: "2018",
  rating: "5",
  desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team&#039;s highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your c...",
  price: "$39.65",
  image: "https://itbook.store/img/books/9781617294136.png",
  url: "https://itbook.store/books/9781617294136",
  pdf: {
    "Chapter 2": "https://itbook.store/files/9781617294136/chapter2.pdf",
    "Chapter 5": "https://itbook.store/files/9781617294136/chapter5.pdf",
  },
};

function App() {
  fetchBooks();
  return (
    <AppThemeProvider>
      <Header></Header>
      <AppContainerBox>
        <BookPage
          title={book.title}
          subtitle={book.subtitle}
          isbn13={book.isbn13}
          price={book.price}
          image={book.image}
          url={book.url}
          is_bookmarked={false}
          authors={book.authors}
          publisher={book.publisher}
          language={book.language}
          isbn10={book.isbn10}
          pages={book.pages}
          year={book.year}
          rating={book.rating}
          desc={book.desc}
        ></BookPage>
      </AppContainerBox>
      <Footer></Footer>
    </AppThemeProvider>
  );
}

export default App;
