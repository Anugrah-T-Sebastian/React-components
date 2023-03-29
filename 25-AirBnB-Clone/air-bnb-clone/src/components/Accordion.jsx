import { useState, useEffect } from "react";
import AccordionText from "./AccordionText";
const AccordionContainer = ({ el, accordionNo, setAccordianNo }) => {
  const [accordion, setAccordion] = useState(true);

  useEffect(() => {
    if (accordionNo === el.id) setAccordion(true);
    else setAccordion(false);
  }, [accordionNo]);

  const handleClick = (number) => {
    console.log("Test");
    setAccordianNo(number);
  };
  return (
    <div>
      <h1>{el.heading}</h1>
      <button onClick={() => handleClick(el.id)}>
        {accordion ? "Minus" : "PLus"}
      </button>
      {accordion ? <AccordionText str={el.str} /> : ""}
    </div>
  );
};

export default AccordionContainer;
