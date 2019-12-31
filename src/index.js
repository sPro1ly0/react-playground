import React from 'react';
import ReactDOM from 'react-dom';
import App from './paltrows-power-toes/App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
//import HelloWorld from './state-drills/HelloWorld';
//import Bomb from './state-drills/Bomb';
//import RouletteGun from './state-drills/RouletteGun';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));