import React, { useState } from "react";

const App = () => {
  const [turn, setTurn] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null))

  return (
    <div>
      <h1>Turn: {turn ? "O" : "X"}</h1>
      <div className="board-row">
        <Square turn={turn} setTurn={setTurn} squares={squares} setSquares={setSquares} />
        <Square turn={turn} setTurn={setTurn} squares={squares} setSquares={setSquares} />
        <Square turn={turn} setTurn={setTurn} squares={squares} setSquares={setSquares} />
      </div>
      <div className="board-row">
        <Square turn={turn} setTurn={setTurn} squares={squares} setSquares={setSquares} />
        <Square turn={turn} setTurn={setTurn} squares={squares} setSquares={setSquares} />
        <Square turn={turn} setTurn={setTurn} squares={squares} setSquares={setSquares} />
      </div>
      <div className="board-row">
        <Square turn={turn} setTurn={setTurn} squares={squares} setSquares={setSquares} />
        <Square turn={turn} setTurn={setTurn} squares={squares} setSquares={setSquares} />
        <Square turn={turn} setTurn={setTurn} squares={squares} setSquares={setSquares} />
      </div>
    </div>
  );
};

export default App;

const Square = ({turn, setTurn, squares, setSquares}) => {
  const [value, setValue] = useState({
    value: null,
    isClick: false
  });

  const clickHandle = () => {
    if (!value.isClick) {
        if (turn) {
            setValue({value: "O", isClick: true})
        }
        else {
            setValue({value: "X", isClick: true})
        }
        setTurn(!turn)
    }
  };

  return (
    <div>
      <button className="square" onClick={clickHandle}>
        {value.value}
      </button>
    </div>
  );
};
