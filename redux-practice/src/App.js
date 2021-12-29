import React from "react";
import {useSelector} from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter)
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <h3>Valuable data that I shouldn't see</h3>
    </div>
  );
}

export default App;
