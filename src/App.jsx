import { useState } from "react";
import Playboard from "./PlayBoard.jsx";
import "./styles/app.css";
function App() {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState("");

  const handleClick = () => {
    setReset(true);
  };
  return (
    <>
      <div className="App">
        <p id="ins">Player X starts the game initially</p>
        <Playboard
          winner={winner}
          setWinner={setWinner}
          reset={reset}
          setReset={setReset}
        />
        <div className={!reset && winner !== "" ? "win-window" : "not-win"}>
          {winner === "X" && <p>Player X wins</p>}
          {winner === "O" && <p>Player O wins</p>}
          {winner === "D" && <p>Draw</p>}
          <button onClick={handleClick}>Reset</button>
        </div>
      </div>
    </>
  );
}
export default App;
