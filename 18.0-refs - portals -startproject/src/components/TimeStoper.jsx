import { useState, useRef } from "react";

export default function TimeStoper({ title, targetTime }) {
  const timerRef = useRef(null);
  const [timerStart, setTimerStart] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  function handleStart() {
    timerRef.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStart(true);
  }
  function handleStop() {
    clearTimeout(timerRef.current);
    setTimerStart(false);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>Bạn đã thua</p>}
      <p>
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <button onClick={timerStart ? handleStop : handleStart}>
        {timerStart ? "Stop" : "Start"}
      </button>
      <p className={timerStart ? "active" : undefined}>
        {timerStart ? "Time is running" : "Timer inactive"}
      </p>
    </section>
  );
}
