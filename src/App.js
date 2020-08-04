import React from 'react';
import Header from './Header.js';
import CreatureList from './CreatureList.js';
import creatureData from './data.js';
import './App.css';

function App() {
  return (
    <body>
      <Header />
      <CreatureList creatures={creatureData} />
    </body>
  );
}

export default App;
