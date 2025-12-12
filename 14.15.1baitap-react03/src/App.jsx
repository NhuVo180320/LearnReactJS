import { useState } from "react";

//bài tập 03 khoá học react js tại https://tuhoc.cc

export default function App() {
  const [isActive, setIsActive] = useState(false);
  function handleToggleBtn() {
    // if (isActive === true) {
    //   setIsActive(false);
    // } else {
    //   setIsActive(true);
    // }
    setIsActive(!isActive);
  }

  return (
    <div className="container">
      <p className={isActive ? "active" : undefined}>Click vào em!</p>
      {/* {isSelectBtn !== true ? (
        <p className={isSelectBtn}>Click vào em!</p>
      ) : (
        <p className="active">Click vào em!</p>
      )} */}
      <button onClick={handleToggleBtn}>Toggle btn</button>
    </div>
  );
}
