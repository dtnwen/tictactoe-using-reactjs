import React, { useState } from "react";

const App = () => {
  const [turn, setTurn] = useState(false);
    const [square, setSquare] = useState(Array(9).fill({value: null, isClick: false}))
    console.log(square)

  return (
    <div>
      <h1>Turn: {turn ? "O" : "X"}</h1>
      <div className="board-row">
        <Square turn={turn} setTurn={setTurn} square={square[0]} setSquare={setSquare} />
        <Square turn={turn} setTurn={setTurn} square={square[1]} setSquare={setSquare} />
        <Square turn={turn} setTurn={setTurn} square={square[2]} setSquare={setSquare} />
      </div>
      <div className="board-row">
        <Square turn={turn} setTurn={setTurn} square={square[3]} setSquare={setSquare} />
        <Square turn={turn} setTurn={setTurn} square={square[4]} setSquare={setSquare} />
        <Square turn={turn} setTurn={setTurn} square={square[5]} setSquare={setSquare} />
      </div>
      <div className="board-row">
        <Square turn={turn} setTurn={setTurn} square={square[6]} setSquare={setSquare} />
        <Square turn={turn} setTurn={setTurn} square={square[7]} setSquare={setSquare} />
        <Square turn={turn} setTurn={setTurn} square={square[8]} setSquare={setSquare} />
      </div>
    </div>
  );
};

export default App;

const Square = ({ turn, setTurn, square, setSquare }) => {
    console.log(square.isClick)
    
  const clickHandle = () => {
    if (!square.isClick) {
      if (turn) {
        setSquare({ value: "O", isClick: true });
      } else {
        setSquare({ value: "X", isClick: true });
      }
      setTurn(!turn);
    }
};

  return (
    <div>
      <button className="square" onClick={clickHandle}>
        {}
      </button>
    </div>
  );
};
