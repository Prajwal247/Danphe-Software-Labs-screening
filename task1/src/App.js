import logo from "./logo.svg";
import Button from "./Component/Button";
import { useState } from "react";

function App() {
  const [currentColor, setCurrentColor] = useState("red");
  const [colorHistory, setColorHistory] = useState([]);

  const availableColor = ["red", "green", "blue", "black", "orange"];
  const onButtonClick = () => {
    setColorHistory(() => [...colorHistory, currentColor]);
    if (currentColor === "blue") {
      setCurrentColor("green");
    } else {
      let randomColor =
        availableColor[Math.floor(Math.random() * availableColor.length)];
      setCurrentColor(randomColor);
    }
  };

  const getColorHistory = () => {
    if(!colorHistory.length){
      return null;
    }
    return (
      <p>
        Color History: 
        {colorHistory.map((item) => (
          <span style={{ color: item }}>{item}, </span>
        ))}
      </p>
    );
  };
  return (
    <div>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button name="Click me" color={currentColor} onClick={onButtonClick} />
      </div>
      <div>{getColorHistory()}</div>
    </div>
  );
}

export default App;
