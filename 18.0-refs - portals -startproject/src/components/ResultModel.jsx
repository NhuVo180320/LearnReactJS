export default function ResultModel({ result, targetTime, ref }) {
  return (
    <dialog ref={ref} className="result-modal">
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
