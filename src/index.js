import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.jsx";
import AuthService from "./service/auth_service";
import StudentRepository from "./service/students_repository";
import BooksRepository from "./service/books_repository";
import Search from "./service/search";

const authService = new AuthService();
const studentRepository = new StudentRepository();
const booksRepository = new BooksRepository();
const search = new Search();

ReactDOM.render(
  <App
    authService={authService}
    studentRepository={studentRepository}
    booksRepository={booksRepository}
    search={search}
  />,
  document.getElementById("root")
);
