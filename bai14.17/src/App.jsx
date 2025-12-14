import { useState } from "react";
import Book from "./Book";
import "./App.css";

const myBooks = ["sach hay", "sach giao khoa", "sach truyen tranh"];
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1>Danh sach yeu thich</h1>
        <ul>
          {myBooks.map((book, index) => (
            <Book title={book} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
