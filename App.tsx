import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Audience } from './components/Audience';
import { Pillars } from './components/Pillars';
import { Hosts } from './components/Hosts';
import { Info } from './components/Info';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark font-sans selection:bg-cyan-500 selection:text-black">
      <Hero />
      <About />
      <Audience />
      <Pillars />
      <Hosts />
      <Info />
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;