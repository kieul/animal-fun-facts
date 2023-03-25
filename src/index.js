import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "";
const showBackground = true;
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);
const images = [];

for (const animal of Object.keys(animals)) {
  images.push(
    <img
      onClick={displayFact}
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
    />
  );
}

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {showBackground && background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

function displayFact(e) {
  const animalName = e.target.alt;
  const randomIndex = Math.floor(Math.random() * 3);
  const funFact = animals[animalName].facts[randomIndex];
  const factElement = document.getElementById("fact");
  factElement.innerHTML = funFact;
}
ReactDOM.render(animalFacts, document.getElementById("root"));
