import { useState } from "react";
import "./App.css";

function App() {
  console.log("App duoc goi");
  const [count, setCount] = useState(0);
  const handlleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };

  //ham callback
  const incrementThreeTimes = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={incrementThreeTimes}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
