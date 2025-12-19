import { useState } from "react";
import "./App.css";

function App() {
  //khai bao state de luu gia tri
  console.log("run");
  const [user, setUser] = useState({ playerName: "", email: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    //setUser({ ...user, [name]: value });
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    console.log(user);
  };

  return (
    <>
      <h2>nhap ten nguoi choi: </h2>
      <input
        type="text"
        name="playerName"
        value={user.playerName}
        onChange={handleChange}
      ></input>
      <p>Xin chao: {user.playerName}</p>
      <h2>nhap email nguoi choi: </h2>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
      ></input>
      <p>Email: {user.email}</p>
    </>
  );
}

export default App;
