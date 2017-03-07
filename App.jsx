import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            Hi!!
            <h2>{this.props.text}</h2>
         </div>
      );
   }
}

export default App;
