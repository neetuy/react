import React from 'react';
import ReactDOM from 'react-dom';
import Abc from './Abc.jsx';
import App from './App.jsx';
import PropsValidate from './PropsValidate.jsx';
import ComponentApiEx from './ComponentApiEx.jsx';
import ReactStateEx from './ReactStateEx.jsx'
import ComponentLC from './ComponentLC.jsx'
import RefsEx from './RefsEx.jsx'
import KeyEx from './KeyEx.jsx'


ReactDOM.render(<App text="How are you." />, document.getElementById('example1'));
ReactDOM.render(<Abc />, document.getElementById('example2'));
ReactDOM.render(<PropsValidate />, document.getElementById('example3'));
ReactDOM.render(<ComponentApiEx />, document.getElementById('example4'));
ReactDOM.render(<ReactStateEx/>, document.getElementById('example5'));
ReactDOM.render(<ComponentLC/>, document.getElementById('example6'));
setTimeout(() => {
ReactDOM.unmountComponentAtNode(document.getElementById('example6'));}, 10000);
ReactDOM.render(<RefsEx/>, document.getElementById('example7'));
ReactDOM.render(<KeyEx/>, document.getElementById('example8'));
