import PropTypes from "prop-types";
import logo from "./assets/logo-tuhoc.png";
import { data } from "../data.js";

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Tự Học" />
        <h1>React Tuhoc.cc</h1>
        <p>
          Học React - Khám phá cách xây dựng ứng dụng linh hoạt, hiện đại, và
          đầy sáng tạo!
        </p>
      </header>
    </>
  );
}

function MaiContent(props) {
  return (
    <li>
      <img src={props.image} alt={props.title}></img>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </li>
  );
}
MaiContent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            {data.map((item, index) => (
              <MaiContent
                key={index}
                image={item.image}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
