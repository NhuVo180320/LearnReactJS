import "./App.css";
function Header() {
  return (
    <>
      <h2>Danh sach cong viec cua toi</h2>
      <ul>
        <li>Hoc bai react</li>
        <li>Hoan thanh bai lap</li>
      </ul>
    </>
  );
}

function App() {
  return (
    <>
      {/* <> là Fragment */}
      <Header />
      <p>Chuc ban thanh cong viec tot nhat hom nay</p>
    </>
  );
}

export default App;
