import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setPlayerName] = useState(null);
  const [submited, setSubmited] = useState(false);

  function handleChangeName(event) {
    setSubmited(false);
    setPlayerName(event.target.value);
  }
  function handleClick() {
    setSubmited(true);
  }
  return (
    <>
      <section id="player">
        <h2>Welcome {submited ? enteredPlayerName : "No Name"}</h2>
        <div>
          <input
            type="text"
            onChange={handleChangeName}
            value={enteredPlayerName}
          />
          <button onClick={handleClick}>ddd</button>
        </div>
      </section>
    </>
  );
}
