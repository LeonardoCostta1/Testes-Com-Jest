import React, { useState } from "react";

import "./style.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  function contar() {
    if (counter >= 0 || counter <= 0) {
      setCounter(counter + 1);
    }
  }
  function remover() {
    if (counter >= 0 || counter <= 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <div className="counter_container">
      <div className="button_container">
        <button className="button button_decrement" onClick={() => remover()}>
          REMOVE
        </button>
        <button className="button button_increment" onClick={() => contar()}>
          ADD
        </button>
      </div>

      <h1 className="counter__title">{counter}</h1>
    </div>
  );
}

export default Counter;
