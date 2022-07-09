import './App.css';
import AppHeader from './components/app-header';
import LoginPage from './components/login-page';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <AppHeader>
        <ul>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </AppHeader>
      <Routes>
        <Route path='/register' element={<LoginPage/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
