import { useImperativeHandle, useRef } from "react";

//chỉ những gì được khai báo trong useImperativeHandle mới có thể truy cập từ cha.
//Các biến, hàm, DOM khác là private, cha không truy cập được
export default function ResultModel({ result, targetTime, ref }) {
  const dialogPrivate = useRef();
  //một khi đã khai báo useImperativeHandle thì ref truyền vào component phải là ref từ cha truyền xuống
  //và khi truy cập từ cha chỉ có thể truy cập những gì được khai báo trong useImperativeHandle
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogPrivate.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialogPrivate} className="result-modal">
      <h2>you {result}</h2>
      <p>
        Thời gian đích: <strong>{targetTime} second</strong>
      </p>
      <p>
        Bạn đã dừng tại <strong>X second</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
