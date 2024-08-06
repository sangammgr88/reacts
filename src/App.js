// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        {/* Other content goes here */}
      </main>
      <About/>
    </div>
  );
};

export default App;
