import React, { useEffect, useRef } from "react";

const UseREfff = () => {
  const refrenc = useRef([]);
  useEffect(() => {
    console.log(refrenc.current.value);
  });
  const Handle = (e) => {
    e.preventDefault();
    console.log(refrenc.current);
  };

  return (
    <div>
      <form onSubmit={Handle}>
        <input type="text" ref={refrenc} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseREfff;
