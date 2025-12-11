import { data } from "../data.js";
import Header from "./components/Header/Header.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import "./App.css";

// function MaiContent(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title}></img>
//       <h2>{props.title}</h2>
//       <p>{props.desc}</p>
//     </li>
//   );
// }

function App() {
  console.log("App duoc chay");
  const [selectedTopic, setselectedTopic] = useState("pls click on the button"); //goi o cap nhat trong component hook
  // function handleClick(selectedButton) {
  //   alert(`You clicked button ${selectedButton}`);
  // }

  // ===== BẮT ĐẦU CODE MỚI: State để lưu lời chào =====
  const [greeting, setGreeting] = useState("Nhấn nút để xem lời chào!");
  // ===== KẾT THÚC CODE MỚI =====

  function handleClick(selectedTopic) {
    setselectedTopic(selectedTopic);
  }
  function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    setGreeting(
      new Date().toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    );
    let greetingMessage = "";
    let timeRange = "";
    if (hour >= 0 && hour <= 10) {
      greetingMessage = "Chào buổi sáng";
      timeRange = "(buổi sáng là từ 00h-10h59)";
    } else if (hour >= 11 && hour <= 13) {
      greetingMessage = "Chào buổi trưa";
      timeRange = "(buổi trưa là từ 11h-13h59)";
    } else if (hour >= 14 && hour <= 18) {
      greetingMessage = "Chào buổi chiều";
      timeRange = "(buổi chiều là từ 14h-18h59)";
    } else {
      greetingMessage = "Chào buổi tối";
      timeRange = "(buổi tối là từ 19h-23h59)";
    }
    setGreeting(
      `${greetingMessage} bây giờ là ${new Date().toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })} ${timeRange}`
    );
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            {/* {data.map((item, index) => (
              <MainContent
                key={index}
                image={item.image}
                title={item.title}
                desc={item.desc}
              />
            ))} */}
            <MainContent {...data[0]} />
            <MainContent {...data[1]} />
            <MainContent {...data[2]} />
            <MainContent {...data[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          {/* prettier-ignore */}
          <menu>
            {/* <li>
              <button>Components</button>
              <button>JSX</button>
              <button>Props</button>
              <button>States</button>
            </li> */}
            <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('states')}>States</TabButton>
            {/* <TabButton batky="abc"></TabButton> */}
          </menu>
          <ul>
            <li>{selectedTopic}</li>
            <button
              className="greeting-button"
              onClick={() => updateGreeting("components")}
            >
              Button
            </button>
            <div className="greeting-display">{greeting}</div>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
