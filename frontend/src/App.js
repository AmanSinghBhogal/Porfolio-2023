import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { About, Header, Skills, Projects, Testimonial, Footer } from './container';
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="app">
      <AnimatedCursor
        innerSize={25}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
        outerStyle={{
          border: '3px solid var(--cursor-color)'
        }}
      />
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
