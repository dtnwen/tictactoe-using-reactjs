import React, { useState } from "react";

const App = () => {
  const [turn, setTurn] = useState(false);
    const [value, setValue] = useState()

  return (
    <div>
      <h1>Turn: {turn ? "O" : "X"}</h1>
      <div className="board-row">
        <Square turn={turn} setTurn={setTurn} />
        <Square turn={turn} setTurn={setTurn} />
        <Square turn={turn} setTurn={setTurn} />
      </div>
      <div className="board-row">
        <Square turn={turn} setTurn={setTurn} />
        <Square turn={turn} setTurn={setTurn} />
        <Square turn={turn} setTurn={setTurn} />
      </div>
      <div className="board-row">
        <Square turn={turn} setTurn={setTurn} />
        <Square turn={turn} setTurn={setTurn} />
        <Square turn={turn} setTurn={setTurn} />
      </div>
    </div>
  );
};

export default App;

const Square = ({ turn, setTurn }) => {
  const [value, setValue] = useState({
    value: null,
    isClick: false,
  });

  const clickHandle = () => {
    if (!value.isClick) {
      if (turn) {
        setValue({ value: "O", isClick: true });
      } else {
        setValue({ value: "X", isClick: true });
      }
      setTurn(!turn);
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
