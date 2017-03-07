import React from 'react';
import ReactDOM from 'react-dom';
import Abc from './Abc.jsx';
import App from './App.jsx';
import PropsValidate from './PropsValidate.jsx';
import ComponentApiEx from './ComponentApiEx.jsx';

ReactDOM.render(<App text="How are you." />, document.getElementById('app'));
ReactDOM.render(<Abc />, document.getElementById('abc'));
ReactDOM.render(<PropsValidate />, document.getElementById('example2'));
ReactDOM.render(<ComponentApiEx />, document.getElementById('example3'));
