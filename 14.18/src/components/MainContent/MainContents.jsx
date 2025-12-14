import MainContent from "./MainContent";
import { myData } from "../../../data.js";
import Section from "./Section";

export default function MainContents() {
  return (
    <Section title={"Khái niệm chính trong React"} id="core-concepts">
      <ul>
        {myData.map((item) => (
          <MainContent key={item.title} {...item} />
        ))}
      </ul>
    </Section>
  );
}
