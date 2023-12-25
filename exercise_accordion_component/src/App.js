import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          currOpen={currOpen}
          onOpen={setCurrOpen}
          title={el.title}
          num={index}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        currOpen={currOpen}
        onOpen={setCurrOpen}
        title={"Demo"}
        num={22}
        key={22}
      >
        Test 1
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, currOpen, onOpen, children }) {
  // const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    // setIsOpen((curr) => !curr);
    onOpen(isOpen ? null : num);
  }

  const isOpen = num === currOpen;

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => handleToggle(isOpen)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : `${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
