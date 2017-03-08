import React from 'react';

class ComponentLC extends React.Component {
   constructor() {
      super();
      this.state = {
         txt: "Header from state...",
         
      }
   }
	update( e ){
      this.setState({txt:e.target.value})

   }
   render() {
      return (
         <div>
         <input onChange={this.update.bind(this)}></input>
            <h1>{this.state.txt}</h1> 
         </div>
      );
   }
}

export default ComponentLC;