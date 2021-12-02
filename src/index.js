import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import AuthService from "./service/auth_service";
import StudentRepository from "./service/students_repository";
import BooksRepository from "./service/books_repository";
import DocsRepository from "./service/docs_repository";

const authService = new AuthService();
const studentRepository = new StudentRepository();
const booksRepository = new BooksRepository();
const docsRepository = new DocsRepository();

ReactDOM.render(
  <App
    authService={authService}
    studentRepository={studentRepository}
    booksRepository={booksRepository}
    docsRepository={docsRepository}
  />,
  document.getElementById("root")
);
