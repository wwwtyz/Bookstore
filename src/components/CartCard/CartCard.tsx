import React, { useState } from "react";
import { Book } from "../../pages/Bookpage/BookPage";

export default function CartCard({ book }: { book: Book }) {
  const [count, setCount] = useState(1);

  return (
    <div>
      <div>
        <img src={book.image} alt={book.isbn10} />
      </div>
      <div>
        <h3>{book.title}</h3>
        <p>
          {book.authors}
          {book.publisher} {book.year}
        </p>
        <div>
          <button onClick={() => setCount(count - 1)}>-</button>
          <span>{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <div>
          {book.price.slice(0, 1)}
          {(Number(book.price.slice(1)) * count).toFixed(2)}
        </div>
      </div>
      <div>
        <button>X</button>
      </div>
    </div>
  );
}
