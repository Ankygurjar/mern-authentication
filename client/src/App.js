import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Landing from './components/Landing'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Register from './components/Register'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Landing}/>
      <div className="container">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile" component={Profile}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
