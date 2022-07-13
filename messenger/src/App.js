import './App.css';
import AppHeader from './components/app-header';
import LoginPage from './components/login-page';
import ChatsPage from './components/chats-page';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Component } from 'react';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      chats: {

      },
      usernameSearchQuery: ''
    }
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path='/register' element={
            <div>
              <AppHeader>
                <ul>
                  <li>
                  <Link to='/register'>Sign up</Link>
                  </li>
                 </ul>
              </AppHeader>
              <LoginPage/>
            </div>
          }/>
          <Route path='/chats' element={<ChatsPage/>}/>
        </Routes>
      </Router>
    );
  }
}

