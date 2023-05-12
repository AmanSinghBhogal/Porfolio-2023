import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { About, Header, Skills, Projects, Testimonial, Footer } from './container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
