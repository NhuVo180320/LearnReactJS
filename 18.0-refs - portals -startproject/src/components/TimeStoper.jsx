import { useState, useRef } from "react";
import ResultModel from "./ResultModel";

export default function TimeStoper({ title, targetTime }) {
  const timerRef = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timeIsActive = timeRemaining < targetTime * 1000 && timeRemaining > 0;
  function handleStart() {
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }
  if (timeRemaining <= 0) {
    dialog.current.open();
    clearInterval(timerRef.current);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timerRef.current);
  }
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModel
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p style={{ color: " #ff4545" }}>Bạn đã thua</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>Time remaining: {timeRemaining}</p>
        <button onClick={timeIsActive ? handleStop : handleStart}>
          {timeIsActive ? "Stop" : "Start"}
        </button>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
