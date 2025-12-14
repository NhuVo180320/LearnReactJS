import TabButton from "../TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tab.jsx";
import { EXAMPLES } from "../../../data.js";
import { useState } from "react";

export default function Examples() {
  // const kq = myData.map((item) => ({ ...item }));
  // console.log("kq", kq);
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>vui long click vao nut de chon topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].desc}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <Section
      title="Examples"
      id="examples"
      className="example-section"
      moi="moi"
    >
      {/* prettier-ignore */}
      <Tabs
          // neu khong truyen se lay gia tri mac dinh duoc dat trong Tabs.jsx
            //ButtonsContainer="menu"
            button={
              <>
                <TabButton
                  isSelected={selectedTopic === "components"}
                  onClick={() => {
                    handleSelect("components");
                  }}
                >
                  Components
                </TabButton>
                <TabButton
                  isSelected={selectedTopic === "jsx"}
                  onClick={() => {
                    handleSelect("jsx");
                  }}
                >
                  JSX
                </TabButton>
                <TabButton
                  isSelected={selectedTopic === "props"}
                  onClick={() => {
                    handleSelect("props");
                  }}
                >
                  Props
                </TabButton>
                <TabButton
                  isSelected={selectedTopic === "state"}
                  onClick={() => {
                    handleSelect("state");
                  }}
                >
                  State
                </TabButton>
              </>
            }
          ></Tabs>
      {tabContent}
    </Section>
  );
}
