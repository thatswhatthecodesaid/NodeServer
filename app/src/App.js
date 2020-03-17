import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/register' component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
