import { useState, useEffect } from "react";
import Square from "./Square";

export default function Board() {
  const rowStyle = {
    display: "flex",
  };

  const instructionsStyle = {
    marginTop: "5px",
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "16px",
  };

  const boardStyle = {
    backgroundColor: "#eee",
    width: "208px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    border: "3px #eee solid",
    userSelect: "none",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };

  const buttonStyle = {
    marginTop: "15px",
    marginBottom: "16px",
    width: "80px",
    height: "40px",
    backgroundColor: "#8acaca",
    color: "white",
    fontSize: "16px",
    userSelect: "none",
  };

  const winPaths = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const [nextPlayer, setNextPlayer] = useState("x");
  const [remainingSteps, setRemainingSteps] = useState(9);
  const [resetValue, setResetValue] = useState(false);
  const [xPath, setXPath] = useState([]);
  const [oPath, setOPath] = useState([]);
  const [winner, setWinner] = useState("");

  function resetHandle() {
    setNextPlayer("x");
    setRemainingSteps(9);
    setResetValue((oldVal) => !oldVal);
    setXPath([]);
    setOPath([]);
    setWinner("");
  }

  useEffect(() => {
    setXPath((oldVal) => oldVal.sort());
    setOPath((oldVal) => oldVal.sort());

    for (const winPath of winPaths) {
      const xStatus = winPath.every((path) => {
        return xPath.includes(path);
      });

      const oStatus = winPath.every((path) => {
        return oPath.includes(path);
      });

      xStatus && setWinner("X");
      oStatus && setWinner("O");
    }
  }, [xPath, oPath]);

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        {remainingSteps === 0 ? (
          <span style={{ textTransform: "capitalize" }}>game over</span>
        ) : (
          <span style={{ textTransform: "capitalize" }}>
            {!winner && "Next player: " + nextPlayer}
          </span>
        )}
      </div>

      <div id="winnerArea" className="winner" style={instructionsStyle}>
        <span>{winner && "Winner: " + winner}</span>
      </div>

      <button style={buttonStyle} onClick={resetHandle}>
        Reset
      </button>

      <div
        style={{
          ...boardStyle,
          pointerEvents: winner ? "none" : "auto",
          opacity: winner ? 0.5 : 1,
        }}
      >
        <div className="board-row" style={rowStyle}>
          <Square
            path="1"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
            setXPath={setXPath}
            setOPath={setOPath}
          />
          <Square
            path="2"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
            setXPath={setXPath}
            setOPath={setOPath}
          />
          <Square
            path="3"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
            setXPath={setXPath}
            setOPath={setOPath}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            path="4"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
            setXPath={setXPath}
            setOPath={setOPath}
          />
          <Square
            path="5"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
            setXPath={setXPath}
            setOPath={setOPath}
          />
          <Square
            path="6"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
            setXPath={setXPath}
            setOPath={setOPath}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            path="7"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
            setXPath={setXPath}
            setOPath={setOPath}
          />
          <Square
            path="8"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
            setXPath={setXPath}
            setOPath={setOPath}
          />
          <Square
            path="9"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
            setXPath={setXPath}
            setOPath={setOPath}
          />
        </div>
      </div>
    </div>
  );
}
