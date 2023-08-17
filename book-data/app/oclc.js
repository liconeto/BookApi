// pages/index.js
import BookList from "../components/bookList";

const HomePage = ({ books }) => {
  return (
    <div>
      <h1>Meus Livros Favoritos</h1>
      <BookList books={books} />
    </div>
  );
};

export async function getServerSideProps() {
  const apiKey = "SUA_CHAVE_DE_API";
  const apiUrl = "URL_DO_ENDPOINT_DA_API";

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return {
    props: {
      books: data.books, // Supondo que a resposta contém uma propriedade "books"
    },
  };
}

export default HomePage;
