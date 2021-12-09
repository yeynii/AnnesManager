import React from "react";
import "./app.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Manager from "./components/Manager/Manager";
import BookManager from "./components/BookManager/BookManager";
import Cloud from "./components/Cloud/Cloud";
import Owner from "./components/Owner/Owner";

function App({
  authService,
  studentRepository,
  booksRepository,
  docsRepository,
  teacherRepository,
}) {
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
            teacherRepository={teacherRepository}
          />
        </Route>
        <Route path="/books">
          <BookManager
            authService={authService}
            booksRepository={booksRepository}
          />
        </Route>
        <Route path="/cloud">
          <Cloud authService={authService} docsRepository={docsRepository} />
        </Route>
        <Route path="/owner">
          <Owner
            authService={authService}
            studentRepository={studentRepository}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
