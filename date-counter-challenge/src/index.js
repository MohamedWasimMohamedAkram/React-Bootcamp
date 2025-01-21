import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <button onClick={() => setStep((s) => s - 1)}> - </button>
      <span> Step:{step} </span>
      <button onClick={() => setStep((s) => s + 1)}> + </button>
      <br />
      <button onClick={() => setCount((c) => c - step)}> - </button>
      <span> Count:{count} </span>
      <button onClick={() => setCount((c) => c + step)}> + </button>
      <br />
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span>
        <strong>{date.toDateString()}</strong>
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
