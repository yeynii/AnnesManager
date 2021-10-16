import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import AuthService from './service/auth_service';
import StudentRepository from './service/student_repository';

const authService = new AuthService();
const studentRepository = new StudentRepository();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} studentRepository={studentRepository}/>
  </React.StrictMode>,
  document.getElementById('root')
);