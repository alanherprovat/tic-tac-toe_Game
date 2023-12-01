import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles/board.css";
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function PlayBoard({ winner, setWinner, reset, setReset }) {
  const [current, setCurrent] = useState("X");
  const [data, setData] = useState(Array(9).fill(""));

  useEffect(() => {
    if (reset) {
      setData(Array(9).fill(""));
      setCurrent("X");
      setWinner("");
      setReset(false);
    }
  }, [reset, setReset, setWinner]);

  const writeIn = (index) => {
    if (data[index] === "") {
      let board = [...data];
      board[index] = current;
      setData(board);
      setCurrent(current === "X" ? "O" : "X");
      check(board);
    }
  };
  const check = (board) => {
    if (checkWin(board)) {
      setWinner(current === "X" ? "X" : "O");
    } else if (checkforDraw(board)) {
      setWinner("D");
    }
  };
  const checkWin = (board) => {
    return winningConditions.some(
      ([a, b, c]) =>
        board[a] !== "" && board[a] === board[b] && board[b] === board[c]
    );
  };

  const checkforDraw = (board) => {
    return board.every((element) => element !== "");
  };

  return (
    <div className="board">
      {data.map((value, index) => (
        <div
          key={index}
          className="input"
          onClick={winner === "" ? () => writeIn(index) : null}
        >
          {value}
        </div>
      ))}
      <p>board</p>
    </div>
  );
}
PlayBoard.propTypes = {
  winner: PropTypes.string,
  setWinner: PropTypes.func,
  reset: PropTypes.bool,
  setReset: PropTypes.func,
};
export default PlayBoard;
