import "./Main.css";
import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

const Main = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));
  const onSubmit = (e) => {
  try {
    e.preventDefault();
    const colors = new Values(color).all(10);
    setList(colors)
    // console.log(colors);
  } catch (error) {
    setError(true)
    console.error(error)
  }
  };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
            className={`${error?"error":null}`}
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} color={color} hexa={color.hex}/>;
        })}
      </section>
    </>
  );
};

export default Main;
