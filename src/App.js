import React, { Component } from 'react';
//import Split from './composition/Split';
import './App.css';
import Under13 from './Accessiblity/Under13';
//import Table from './Accessiblity/ItemGroup';
//import Tooltip from './composition/Tooltip';
//import Messages from './Messages';
//import TheDate from './state/TheDate';
//import Counter from './state/Counter';
//import Tabs from './state/Tabs';
//import Accordion from './state-drills/Accordion';
//import DemonymApp from './demonymapp/demonymApp';
//testing intro example
// const sections = [
//   {
//     title: 'Section 1',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//   },
//   {
//     title: 'Section 2',
//     content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
//   },
//   {
//     title: 'Section 3',
//     content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
//   },
// ]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Under13 />
      </div>
    );
  }
}

// const winners = [
//   {name: "Sally"}
// ]

// const losers = [
//   {name: "Bill"}
// ]

//const tabsProp = [
//  { name: 'First tab',
//    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
//  { name: 'Second tab',
//    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
//  { name: 'Third tab',
//    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
//];

//<Messages name="Messages" unread={0}/>
//<Messages name="Notifications" unread={10}/>

// make 2 tooltips here and another inside the App directly
//const firstTooltip = (
//  <Tooltip color="hotpink" message='tooltip message'>
//   ipsum {/*these are children*/}
//  </Tooltip>
//)
//const secondTooltip = (
//  <Tooltip color="#126BCC" message='another tooltip message'>
//    officiis {/*these are children*/}
//  </Tooltip>
//)

//function App() {
//  return ( //2 instances of <Split />
//    <main className='App'>
//      <Split className='left' flexBasis={3}>
//  This is the content for the left `Split`. Star, {firstTooltip} Sun, Moon, Earth, Ocean, Sky. 
//        {/* make another tooltip directly inside the App */}
//        <Tooltip message='one more tooltip message'>
//          Necessitatibus? {/*these are children*/}
//        </Tooltip>
//      </Split>
//      <Split className='right' flexBasis={4}>
//  This is the content for the right `Split`. Dragon Prince Zym {secondTooltip} is awesome.
//      </Split>
//    </main>
//  );
//}

export default App;
