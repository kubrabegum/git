import React, { useState } from "react";
import data from "./data";

const Paragraph = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    let amount=parseInt(count)
    if(amount<=0){
        amount=1
    }
    if(amount>=8){
        amount=8
    }

    console.log(typeof amount)
    setText(data.slice(0,amount));
    console.log("sunmit");
  };

  return (
    <>
      <form className="lorem-form" onSubmit={onSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((data, index) => {
          return <p key={index}> {data}</p>;
        })}
      </article>
    </>
  );
};

export default Paragraph;
