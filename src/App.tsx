import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { StartPage } from './pages/StartPage/StartPage';

const TempNavigation: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/start">Start</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TempNavigation />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/start" element={<StartPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
