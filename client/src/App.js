import React from 'react';
import WorldCupRank from "./components/WorldCupRank";
import './App.css';
import { waitForDomChange } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Top Ranked Women in Soccer</h1>
      <WorldCupRank />
      </header>
    </div>
  );
}

export default App;
