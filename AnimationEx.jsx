import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class AnimationEx extends React.Component {

   render() {
      return (
         <div>
            <ReactCSSTransitionGroup transitionName = "example"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionEnter = {true} transitionLeave = {true}>
					
               <h1>This is Animation Example.....</h1>
            </ReactCSSTransitionGroup>
         </div>      
      );
   }
}

export default AnimationEx;