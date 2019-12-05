import React from 'react';
import Split from './composition/Split';
import './App.css';

function App() {
  return ( //2 instances of <Split />
    <main className='App'>
      <Split className='left' flexBasis={3}>
        This is the content for the left `Split`. Star, Sun, Moon, Earth, Ocean, Sky.
      </Split>
      <Split className='right' flexBasis={4}>
        This is the content for the right `Split`. Dragon Prince Zym is awesome.
      </Split>
    </main>
  );
}

export default App;
