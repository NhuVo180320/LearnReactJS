import Header from "./components/Header";
import Player from "./components/Player";
import TimeStoper from "./components/TimeStoper";
function App() {
  return (
    <>
      <Header />
      <Player />
      <div id="challenges">
        <TimeStoper title="Level 1" targetTime={1} />
        <TimeStoper title="Level 2" targetTime={5} />
        <TimeStoper title="Level 3" targetTime={10} />
        <TimeStoper title="Level 4" targetTime={15} />
      </div>
    </>
  );
}

export default App;
