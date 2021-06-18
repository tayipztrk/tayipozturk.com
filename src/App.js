import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import ProjectsList from './components/projects/ProjectsList';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
          <Nav/>
          <About/>
          <ProjectsList/>
          <Contact/>
          <Footer/>
      </Router>
    </>
  );
}

export default App;
