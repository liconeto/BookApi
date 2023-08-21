"use client";
// pages/index.js
import { useState } from "react";
import { fetchBooks } from "../../utils/googleBooks";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Titulo do Livro"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>
      <Button variant="contained" onClick={searchBooks}>
        Buscar <TravelExploreIcon />
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ISBN</TableCell>
              <TableCell align="right">TITULO</TableCell>
              <TableCell align="right">AUTOR</TableCell>
              <TableCell align="right">PUBLICAÇÃO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow
                key={book.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {book.volumeInfo.industryIdentifiers[0].identifier}
                </TableCell>
                <TableCell align="right">{book.volumeInfo.title}</TableCell>
                <TableCell align="right">
                  {book.volumeInfo.authors[0]}
                </TableCell>
                <TableCell align="right">
                  {book.volumeInfo.publishedDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {console.log(books)}
    </div>
  );
};

export default HomePage;
