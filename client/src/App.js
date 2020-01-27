import React from 'react';
import WorldCupRank from "./components/WorldCupRank";
import './App.css';
import { waitForDomChange } from '@testing-library/react';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <WorldCupRank />
      </header>
    </div>
  );
}

export default App;
