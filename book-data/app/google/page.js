"use client";
// pages/index.js
import { useState } from "react";
import { fetchBooks } from "../../utils/googleBooks";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    const data = await fetchBooks(query);
    setBooks(data.items || []);
  };

  return (
    <div>
      <h1>Busca de Livros</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchBooks}>Buscar</button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.volumeInfo.title}</li>
        ))}
      </ul>
      {console.log(books)}
    </div>
  );
};

export default HomePage;
