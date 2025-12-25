import "./App.css";
import LoginState from "./components/LoginState";
import LoginUseReducer from "./components/LoginUseReducer";

function App() {
  return (
    <>
      <LoginState />
      <p>----</p>
      <LoginUseReducer />
    </>
  );
}

export default App;
