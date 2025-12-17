import { useState } from "react";
import "./App.css";

function App() {
  //khai bao state de luu gia tri
  const [playerName, setPlayerName] = useState("PlayerName");
  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <>
      <h2>nhap ten nguoi choi: </h2>
      <input type="text" value={playerName} onChange={handleChange}></input>
      <p>Xin chao: {playerName}</p>
    </>
  );
}

export default App;
