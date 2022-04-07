import React, { useState } from "react";
import { render } from "react-dom";

function Item() {
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <h1>Ваши товары</h1>
      <h2>Количество товара: {quantity}</h2>
      <button onClick={() => setQuantity(quantity + 1)}>
        <strong>Плюс один</strong>
      </button>
      <button onClick={() => setQuantity(quantity - 1)}>
        <strong>Минус один</strong>
      </button>
    </>
  );
}

render(<Item />, document.getElementById("root"));
