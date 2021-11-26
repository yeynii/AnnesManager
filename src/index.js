import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import AuthService from "./service/auth_service";
import StudentRepository from "./service/students_repository";
import BooksRepository from "./service/books_repository";

const authService = new AuthService();
const studentRepository = new StudentRepository();
const booksRepository = new BooksRepository();

ReactDOM.render(
  <App
    authService={authService}
    studentRepository={studentRepository}
    booksRepository={booksRepository}
  />,
  document.getElementById("root")
);
