import React, { useState } from "react";

const App = () => {
  const [turn, setTurn] = useState(false);
    const [square, setSquare] = useState(Array(9).fill({value: null, isClick: false}))

  return (
    <div>
      <h1>Turn: {turn ? "O" : "X"}</h1>
      <div className="board-row">
        <Square turn={turn} setTurn={setTurn} square={square[0]} setSquare={setSquare} index={0} />
        <Square turn={turn} setTurn={setTurn} square={square[1]} setSquare={setSquare} index={1} />
        <Square turn={turn} setTurn={setTurn} square={square[2]} setSquare={setSquare} index={2} />
      </div>
      <div className="board-row">
        <Square turn={turn} setTurn={setTurn} square={square[3]} setSquare={setSquare} index={3} />
        <Square turn={turn} setTurn={setTurn} square={square[4]} setSquare={setSquare} index={4} />
        <Square turn={turn} setTurn={setTurn} square={square[5]} setSquare={setSquare} index={5} />
      </div>
      <div className="board-row">
        <Square turn={turn} setTurn={setTurn} square={square[6]} setSquare={setSquare} index={6} />
        <Square turn={turn} setTurn={setTurn} square={square[7]} setSquare={setSquare} index={7} />
        <Square turn={turn} setTurn={setTurn} square={square[8]} setSquare={setSquare} index={8} />
      </div>
    </div>
  );
};

export default App;

const Square = ({ turn, setTurn, square, setSquare, index }) => {
    
  const clickHandle = () => {
    if (!square.isClick) {
      setSquare((oldValue) => {
        return oldValue.map((o, i) => {
          return i === index ? {...o, value: turn ? "O" : "X", isClick: true} : o
        })
      })
      setTurn(!turn);
    }
};

  return (
    <div>
      <button className="square" onClick={clickHandle}>
        {square.value}
      </button>
    </div>
  );
};

const caculateWinner = () => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
}