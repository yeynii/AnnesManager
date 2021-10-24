import React from 'react';
import './app.module.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/login/login';
import Manager from './components/manager/manager';

function App({authService, studentRepository}) {
  return (
		<BrowserRouter>
		  <Switch>
		    <Route path={["/login", "/"]} exact>
          <Login authService={authService}/>
		    </Route>
		    <Route path="/home">
          <Manager authService={authService} studentRepository={studentRepository}/>
		    </Route>
		  </Switch>
		</BrowserRouter>
  );
}

export default App;
