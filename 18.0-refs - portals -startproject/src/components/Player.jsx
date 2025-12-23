import { useState, useRef } from "react";

export default function Player() {
  //useRef chi tham chieu truy cap thuoc tinh phan tu nhung khong render lai giao dien nen phai dung useState de luu tru gia tri va render lai giao dien
  const [enteredPlayerName, setPlayerName] = useState(false);
  //   const [submited, setSubmited] = useState(false);
  const nameInputRef = useRef();
  //   function handleChangeName() {
  //     setSubmited(false);
  //     setPlayerName(nameInputRef.current.value);
  //   }
  function handleClick() {
    setPlayerName(nameInputRef.current.value);
  }
  return (
    <>
      <section id="player">
        {/* neu enteredPlayerName khac null va khac undefined tra ve enteredPlayerName */}
        <h2>Welcome {enteredPlayerName ?? "No Name"}</h2>
        <div>
          <input type="text" ref={nameInputRef} />
          <button onClick={handleClick}>ddd</button>
        </div>
      </section>
    </>
  );
}
