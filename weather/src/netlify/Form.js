import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState({
    email: "",
    name: "",
  });
  const { email, name } = input;

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setInput(input);
    console.log(input)
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="emter a email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder=" enter name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
