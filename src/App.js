import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';

// make 2 tooltips here and another inside the App directly
const firstTooltip = (
  <Tooltip color="hotpink" message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color="#126BCC" message='another tooltip message'>
    officiis
  </Tooltip>
)

function App() {
  return ( //2 instances of <Split />
    <main className='App'>
      <Split className='left' flexBasis={3}>
  This is the content for the left `Split`. Star, {firstTooltip} Sun, Moon, Earth, Ocean, Sky. 
        {/* make another tooltip directly inside the App */}
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right' flexBasis={4}>
  This is the content for the right `Split`. Dragon Prince Zym {secondTooltip} is awesome.
      </Split>
    </main>
  );
}

export default App;
