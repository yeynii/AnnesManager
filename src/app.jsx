import React from "react";
import "./app.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Manager from "./components/Manager/Manager";
import BookManager from "./components/BookManager/BookManager";
import Cloud from "./components/Cloud/Cloud";

function App({ authService, studentRepository, booksRepository }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/login", "/"]} exact>
          <Login authService={authService} />
        </Route>
        <Route path="/home">
          <Manager
            authService={authService}
            studentRepository={studentRepository}
            booksRepository={booksRepository}
          />
        </Route>
        <Route path="/books">
          <BookManager
            authService={authService}
            booksRepository={booksRepository}
          />
        </Route>
        <Route path="/cloud">
          <Cloud authService={authService}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
