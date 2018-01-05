import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp options={['option 1', 'option 2']}/>, document.getElementById("app"));