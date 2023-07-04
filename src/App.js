import { useState } from "react";

import * as math from "mathjs";

import "./App.css";
import button from "./components/button";
import input from "./components/input";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };

  const calculateResult = () => {
    const input = text.join(""); // Remove commas

    setResult(math.evaluate(input));
  };

  const resetinput = () => {
    setText("");
    setResult("");
  };

  const buttonColor = "#f2a33c";

  return (
    <div className="App">
      <div className="calc-wrapper">
        <input text={text} result={result} />
        <div className="row">
          <button symbol="7" handleClick={addToText} />
          <button symbol="8" handleClick={addToText} />
          <button symbol="9" handleClick={addToText} />
          <button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <button symbol="4" handleClick={addToText} />
          <button symbol="5" handleClick={addToText} />
          <button symbol="6" handleClick={addToText} />
          <button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <button symbol="1" handleClick={addToText} />
          <button symbol="2" handleClick={addToText} />
          <button symbol="3" handleClick={addToText} />
          <button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <button symbol="0" handleClick={addToText} />
          <button symbol="." handleClick={addToText} />
          <button symbol="=" handleClick={calculateResult} />
          <button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <button symbol="Clear" color="red" handleClick={resetinput} />
      </div>
    </div>
  );
};

export default App;