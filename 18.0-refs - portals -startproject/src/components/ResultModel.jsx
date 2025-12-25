import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

//chỉ những gì được khai báo trong useImperativeHandle mới có thể truy cập từ cha.
//Các biến, hàm, DOM khác là private, cha không truy cập được
export default function ResultModel({
  targetTime,
  remainingTime,
  ref,
  onReset,
}) {
  const dialogPrivate = useRef();
  const formatTimeRemaining = (remainingTime / 1000).toFixed(2);
  const userLost = remainingTime <= 0;
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  //một khi đã khai báo useImperativeHandle thì ref truyền vào component phải là ref từ cha truyền xuống
  //và khi truy cập từ cha chỉ có thể truy cập những gì được khai báo trong useImperativeHandle
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogPrivate.current.showModal();
      },
    };
  });
  //dùng createPortal để render dialog ra ngoài div#modal trong index.html trông code sạch sẽ hơn
  return createPortal(
    <dialog ref={dialogPrivate} className="result-modal">
      {userLost ? (
        <h2>You lost 😢</h2>
      ) : (
        <>
          <h2>You won with </h2>{" "}
          <h2 style={{ color: "red" }}>{score} score 🎉🎉</h2>
          <br></br>
          <br></br>
        </>
      )}
      <p>
        Thời gian đích: <strong>{targetTime} second</strong>
      </p>
      <p>
        Bạn đã dừng tại <strong>{formatTimeRemaining} second</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
