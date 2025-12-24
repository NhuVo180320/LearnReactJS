import { useState, useRef } from "react";
import ResultModel from "./ResultModel";

export default function TimeStoper({ title, targetTime }) {
  const timerRef = useRef(null);
  const dialog = useRef();
  const [timerStart, setTimerStart] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  function handleStart() {
    timerRef.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
    setTimerStart(true);
  }
  function handleStop() {
    resetTimer();
    setTimerStart(false);
  }
  function resetTimer() {
    clearTimeout(timerRef.current);
    setTimerStart(false);
    setTimerExpired(false);
  }

  return (
    <>
      <ResultModel ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p style={{ color: " #ff4545" }}>Bạn đã thua</p>}
        <p>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <button onClick={timerStart ? handleStop : handleStart}>
          {timerStart && !timerExpired ? "Stop" : "Start"}
        </button>
        <p className={timerStart && !timerExpired ? "active" : undefined}>
          {timerStart && !timerExpired ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
