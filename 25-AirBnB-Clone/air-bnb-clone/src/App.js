import logo from "./logo.svg";
import "./App.css";
import AccordionContainer from "./components/Accordion";
import { useState } from "react";

const accordions = [
  { id: 0, heading: "FIRST", str: "Loreem" },
  { id: 1, heading: "SECOND", str: "Loreem" },
  { id: 2, heading: "THIRD", str: "Loreem" },
];

function App() {
  const [accordionNo, setAccordianNo] = useState(0);
  return (
    <div className="">
      SIMPLE ACCORDION
      {accordions.map((el, idx) => {
        return (
          <AccordionContainer
            key={idx}
            el={el}
            accordionNo={accordionNo}
            setAccordianNo={setAccordianNo}
          />
        );
      })}
    </div>
  );
}

export default App;
