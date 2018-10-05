import React, { Component } from 'react';
import './App.css';
// import Dashboard from './component/Dashboard/dashboard';
// import Wizard from './component/Wizard/wizard';
import Header from './component/Header/header';
import routes from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
