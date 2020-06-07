/**
 * @flow
 */
import type {Node} from 'react';

import React from 'react';
import './App.css';
import RecipesContainer from './RecipesContainer';

function App(): Node {
  return (
    <div className="App">
      <header className="App-header">
        <RecipesContainer />
      </header>
    </div>
  );
}

export default App;
