// utils/googleBooks.js
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

export async function fetchBooks(query) {
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  return data;
}
