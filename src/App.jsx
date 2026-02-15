import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Teaching, Lecturing, PlayingBass } from './components';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Teaching />
        <Lecturing />
        <PlayingBass />
        <div className="relative z-0">
          <Contact />

        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
