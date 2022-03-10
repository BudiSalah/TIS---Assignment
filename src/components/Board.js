import { useState } from "react";
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
  };

  const [nextPlayer, setNextPlayer] = useState("x");
  const [remainingSteps, setRemainingSteps] = useState(9);
  const [resetValue, setResetValue] = useState(false);

  function resetHandle() {
    setNextPlayer("x");
    setRemainingSteps(9);
    setResetValue((oldVal) => !oldVal);
  }

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        {remainingSteps === 0 ? (
          <span style={{ textTransform: "capitalize" }}>game over</span>
        ) : (
          <span style={{ textTransform: "capitalize" }}>
            Next player: {nextPlayer}
          </span>
        )}
      </div>

      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>None</span>
      </div>

      <button style={buttonStyle} onClick={resetHandle}>
        Reset
      </button>

      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square
            path="1"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
          />
          <Square
            path="2"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
          />
          <Square
            path="3"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            path="4"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
          />
          <Square
            path="5"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
          />
          <Square
            path="6"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            path="7"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
          />
          <Square
            path="8"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
          />
          <Square
            path="9"
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
            setRemainingSteps={setRemainingSteps}
            resetValue={resetValue}
          />
        </div>
      </div>
    </div>
  );
}
