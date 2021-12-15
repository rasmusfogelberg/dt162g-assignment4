import { useState } from "react";

function App() {

  // Using state to handle a counter
  const [count, setCount] = useState(0);

  // Increasing setCount by 1 for every click
  const clickHandler = () => {
    setCount(count + 1)
  }

  // Setting counter to 0
  const resetHandler = () => {
    setCount(0)
  }

  return (
    <div>
      <div className="text">Hello World</div>
      <div>You have clicked the button {count} times!</div>
      <button onClick={clickHandler}>Click me!</button>
      <button onClick={resetHandler}>Reset clicks</button>
    </div>
  );
}

export default App;