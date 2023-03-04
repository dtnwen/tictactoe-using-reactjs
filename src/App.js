import React, { useEffect, useState } from "react";

const App = () => {
  const [xTurn, setXTurn] = useState(false);
  const [square, setSquare] = useState(Array(9).fill(null));

  const clickHandle = (index) => {
    if (square[index]) {
      return;
    }

    setSquare((oldValue) => {
      return oldValue.map((value, i) => {
        return i === index ? (xTurn ? "X" : "O") : value;
      });
    });
    setXTurn(!xTurn);

    caculateWinner(square);
  };
  useEffect(() => console.log(square));

  return (
    <div>
      <h1>Turn: {xTurn ? "X" : "O"}</h1>
      <div className="board-row">
        <Square square={square[0]} clickHandle={() => clickHandle(0)} />
        <Square square={square[1]} clickHandle={() => clickHandle(1)} />
        <Square square={square[2]} clickHandle={() => clickHandle(2)} />
      </div>
      <div className="board-row">
        <Square square={square[3]} clickHandle={() => clickHandle(3)} />
        <Square square={square[4]} clickHandle={() => clickHandle(4)} />
        <Square square={square[5]} clickHandle={() => clickHandle(5)} />
      </div>
      <div className="board-row">
        <Square square={square[6]} clickHandle={() => clickHandle(6)} />
        <Square square={square[7]} clickHandle={() => clickHandle(7)} />
        <Square square={square[8]} clickHandle={() => clickHandle(8)} />
      </div>
    </div>
  );
};

export default App;

const Square = ({ square, clickHandle }) => {
  return (
    <div>
      <button className="square" onClick={clickHandle}>
        {square}
      </button>
    </div>
  );
};

const caculateWinner = (square) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  if ((square[0] === square[1]) === square[2]) {
    console.log("Winner");
  }
};
