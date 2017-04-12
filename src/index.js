import React from 'react';
import ReactDOM from 'react-dom';
// Cerate new component that produces html
const App = function() {
  return <div>Hi!</div>;
}
// Take this component generagetd HTML and put in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
