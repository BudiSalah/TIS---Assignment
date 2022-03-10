import { useState, useEffect } from "react";

export default function Square({
  path,
  nextPlayer,
  setNextPlayer,
  setRemainingSteps,
  resetValue,
  setXPath,
  setOPath,
}) {
  const squareStyle = {
    width: "60px",
    height: "60px",
    backgroundColor: "#ddd",
    margin: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize: "42px",
    color: "#333",
  };

  const [value, setValue] = useState("");

  function clickHandle({ target }) {
    if (!value) {
      setValue(nextPlayer);

      if (String(nextPlayer).toLowerCase() === "x") {
        setXPath((oldVal) => [...oldVal, parseInt(path)]);
      } else {
        setOPath((oldVal) => [...oldVal, parseInt(path)]);
      }

      setNextPlayer((oldVal) => {
        return String(oldVal).toLowerCase() === "x" ? "o" : "x";
      });

      setRemainingSteps((oldVal) => {
        return (oldVal -= 1);
      });
    }
  }

  useEffect(() => {
    setValue("");
  }, [resetValue]);

  return (
    <div
      onClick={clickHandle}
      className="square"
      style={squareStyle}
      data-path={path}
    >
      {value}
    </div>
  );
}
