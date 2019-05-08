import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import HeaderMenu from "./components/HeaderMenu"
import HomePage from "./pages/HomePage";
import ActuPage from './pages/ActuPage';
import CVPage from './pages/CVPage';
import ProjectsPage from './pages/ProjectsPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderMenu />

          <Route path="/" exact component={HomePage}/>
          <Route path="/actus/" exact component={ActuPage}/>
          <Route path="/cv/" exact component={CVPage}/>
          <Route path="/projects/" exact component={ProjectsPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
