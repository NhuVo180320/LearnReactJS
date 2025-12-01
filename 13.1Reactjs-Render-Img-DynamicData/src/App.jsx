import "./App.css";
import demoPic from "../src/assets/img/avatar-meo-1-004.webp";

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const wellCome = [
  "Chao mung ban den voi ReactJS",
  "Rat vui duoc chao don ban den voi ReactJS",
  "Rat vui duoc gap lai ban trong ReactJS",
];

function randomTitle() {
  return Math.floor(Math.random() * wellCome.length);
}

function Header() {
  const title = wellCome[randomTitle()];
  return (
    <>
      <h1>{title}</h1>
      <p>
        Hom nay la: <strong>{today}</strong>. Thoi gian hien tai{" "}
        <strong>{time}</strong>
      </p>
      <p>{isLogin ? "Ban da dang nhap" : "Hay dang nhap"}</p>
      {/* chon thuoc tinh doi tuong */}
    </>
  );
}

const name = "Quynh Nhu";
let isLogin = true;
let person = {
  name: "Nguyen Van A",
  age: 30,
};
function DynamicValue() {
  return (
    <>
      {/* 1. Dung de chen bieu thuc js (expression)*/}
      <h2>Chao {name}</h2>
      <p>Ket qua: {1 + 2}</p>
      {/* 2. Khong chen cau lenh (statement) */}
      {/* <p>Ket qua: {if (1 > 2) { return "Dung"; } else { return "Sai"; }}</p> */}
      <p>
        ten: {person.name}, tuoi :{person.age}
      </p>
      {/*chen hinh anh*/}
      <img src={demoPic}></img>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <DynamicValue />
    </>
  );
}

export default App;
