"use client";

import { useState } from "react";

const prices = {
  flavor: {
    Chocolate: 20,
    Vanilla: 18,
    "Red Velvet": 25,
  },

  frosting: {
    Vanilla: 5,
    Chocolate: 7,
    Strawberry: 8,
  },

  size: {
    "6 inch": 0,
    "8 inch": 10,
    "10 inch": 20,
  },

  topping: {
    None: 0,
    Strawberry: 5,
    Oreo: 6,
    Sprinkles: 3,
  },
};

export default function CakeCustomizer() {
  const [cake, setCake] = useState({
    flavor: "Chocolate",
    frosting: "Vanilla",
    size: "6 inch",
    topping: "Strawberry",
  });

  function updateCake(type, value) {
    setCake((currentCake) => ({
      ...currentCake,
      [type]: value,
    }));
  }

  const total =
    prices.flavor[cake.flavor] +
    prices.frosting[cake.frosting] +
    prices.size[cake.size] +
    prices.topping[cake.topping];

  return (
    <main className="customizer">
      <div className="customizer-card">
        <div className="cake-preview">
          <div className="cake-icon">🎂</div>

          <h2>Your Cake</h2>

          <p>
            <strong>Flavor:</strong> {cake.flavor}
          </p>

          <p>
            <strong>Frosting:</strong> {cake.frosting}
          </p>

          <p>
            <strong>Size:</strong> {cake.size}
          </p>

          <p>
            <strong>Topping:</strong> {cake.topping}
          </p>

          <h2>RM {total.toFixed(2)}</h2>
        </div>

        <div className="cake-options">
          <h2>Choose Your Cake</h2>

          <h3>Flavor</h3>

          <div className="options">
            {Object.keys(prices.flavor).map((flavor) => (
              <button
                key={flavor}
                className={cake.flavor === flavor ? "selected" : ""}
                onClick={() => updateCake("flavor", flavor)}
              >
                {flavor}
              </button>
            ))}
          </div>

          <h3>Frosting</h3>

          <div className="options">
            {Object.keys(prices.frosting).map((frosting) => (
              <button
                key={frosting}
                className={cake.frosting === frosting ? "selected" : ""}
                onClick={() => updateCake("frosting", frosting)}
              >
                {frosting}
              </button>
            ))}
          </div>

          <h3>Size</h3>

          <div className="options">
            {Object.keys(prices.size).map((size) => (
              <button
                key={size}
                className={cake.size === size ? "selected" : ""}
                onClick={() => updateCake("size", size)}
              >
                {size}
              </button>
            ))}
          </div>

          <h3>Topping</h3>

          <div className="options">
            {Object.keys(prices.topping).map((topping) => (
              <button
                key={topping}
                className={cake.topping === topping ? "selected" : ""}
                onClick={() => updateCake("topping", topping)}
              >
                {topping}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}