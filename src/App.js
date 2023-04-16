import "./App.css";

import iconDice from "./Images/icon-dice.svg";
import dividerDesktop from "./Images/pattern-divider-desktop.svg";
import dividerMobile from "./Images/pattern-divider-mobile.svg";

import axios from "axios";

import { useState, useEffect } from "react";

function App() {
  const [dataFromApi, setDataFromApi] = useState({ "": 0 });

  const randomAdviceFunction = () => {
    axios.get("https://api.adviceslip.com/advice").then((res) => {
      console.log(res.data.slip);
      setDataFromApi(res.data.slip);
    });
  };

  useEffect(randomAdviceFunction, []);

  return (
    <div className="App">
      <p className="id-of-advice">ADVICE: #{dataFromApi.id}</p>
      <h1 className="advice-text">
        <q>{dataFromApi.advice}</q>
      </h1>
      <div className="icon-Divider-imgs">
        <img src={dividerMobile} className="divider-img" />
        <div className="div-of-dice">
        <img
          src={iconDice}
          onClick={randomAdviceFunction}
          className="dice-img"
        />
        </div>
      </div>
    </div>
  );
}

export default App;
