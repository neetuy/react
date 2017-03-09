import React from 'react';
import ReactDOM from 'react-dom';
import {Router , Rout , browserHistory} from 'react-router';
import Abc from './Abc.jsx';
import App from './App.jsx';
import PropsValidate from './PropsValidate.jsx';
import ComponentApiEx from './ComponentApiEx.jsx';
import ReactStateEx from './ReactStateEx.jsx'
import ComponentLC from './ComponentLC.jsx'
import RefsEx from './RefsEx.jsx'
import KeyEx from './KeyEx.jsx'
// import ReactRouterEx from './ReactRouterEx.jsx'
// import ReactRouterL from './ReactRouterL.jsx'
import AnimationEx from './AnimationEx.jsx'
import HOCReact from './HOCReact.jsx'

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
ReactDOM.render(<AnimationEx/>, document.getElementById('example9'));
ReactDOM.render(<HOCReact/>, document.getElementById('example10'));


// ReactDOM.render((
//    <Router history = {browserHistory}>
//       <Route path = "/ReactRouterEx" component = {ReactRouterEx}/>
//       <Route path = "*" component = {ReactRouterL}/>

//    </Router>
	
// ), document.getElementById('example10'))