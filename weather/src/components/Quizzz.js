import React from "react";

const Quizzz = () => {
  return (
    <div>
      <section className="container-fluid pt-20">
        <div>
          <h1 className="text-center text-3xl font-semibold">Quiz</h1>
        </div>
        <p className="text-center text-base pt-6">
          <span className="text-lg font-semibold pr-1">1,</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          facilis reiciendis suscipit aliquid consequuntur odit quo mollitia rem
          quibusdam accusantium.
        </p>
        <br />
        <div className="options ml-7 mt-4">
          <label htmlFor="a">
            <p className="text-base pt-2">
              <span className="text-lg font-semibold pr-1">a</span>
              <input
                type="radio"
                id="a"
                name="prefferd_answer"
                value="a"
                className="mr-1"
              />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              doloremque, aperiam nulla eum possimus officiis!
            </p>
          </label>

          <label htmlFor="b">
            <p className="text-base pt-2">
              <span className="text-lg font-semibold pr-1">b</span>
              <input
                type="radio"
                id="b"
                name="prefferd_answer"
                value="b"
                className="mr-1"
              />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              adipisci, dolore temporibus soluta sint quos?
            </p>
          </label>
          <label htmlFor="c">
            <p className="text-base pt-2">
              <span className="text-lg font-semibold pr-1">c</span>
              <input
                type="radio"
                id="c"
                name="prefferd_answer"
                value="c"
                className="mr-1"
              />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
              voluptatum! Possimus pariatur iusto blanditiis provident?
            </p>
          </label>
          <label htmlFor="d">
            <p className="text-base pt-2">
              <span className="text-lg font-semibold pr-1">d</span>
              <input
                type="radio"
                id="d"
                name="prefferd_answer"
                value="d"
                className="mr-1"
              />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              labore itaque facilis voluptates suscipit recusandae?
            </p>
          </label>
        </div>
        <div className="flex justify-end mt-10 cursor-pointer">
          <button className="border-2 border-black rounded-full px-3 py-1 text-base font-semibold">
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Quizzz;

