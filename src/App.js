import React from 'react';
import {HashRouter, Route} from 'react-router-dom'

import HeaderMenu from "./components/HeaderMenu"
import HomePage from "./pages/HomePage";
import ActuPage from './pages/ActuPage';
import CVPage from './pages/CVPage';
import ProjectsPage from './pages/ProjectsPage';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
          <HeaderMenu />

          <Route path="/" exact component={HomePage}/>
          <Route path="/actus/" exact component={ActuPage}/>
          <Route path="/cv/" exact component={CVPage}/>
          <Route path="/projects/" exact component={ProjectsPage}/>

          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
