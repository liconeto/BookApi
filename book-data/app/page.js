"use client";
// pages/index.js
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import { useState } from "react";
import { fetchBooks } from "../utils/googleBooks";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    const data = await fetchBooks(query);
    setBooks(data.items || []);
  };

  return (
    <div className="div">
      <h1>Data log of Books</h1>
      <ul>
        <li>
          <Button variant="contained" href="/google">
            Api Google
            <GoogleIcon />
          </Button>

          <Button variant="contained" color="secondary" href="/twitter">
            Api Twitter
            <TwitterIcon />
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
