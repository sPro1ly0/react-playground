import React from 'react';
import ReactDOM from 'react-dom';
import Demonym from './demonym';

//smoke test

it('renders result without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Demonym />, div);
    ReactDOM.unmountComponentAtNode(div);
})