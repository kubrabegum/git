import React from "react";

const Netlify = () => {
  return (
    <>
      <div className=" font-sans bg-gray-200 text-gray-800 min-h-screen">
        <div className="section ">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl pt-20">
            Experience
          </h1>
          <div className="jobs-center flex pt-20 flex-col md:flex-row">
            <div className="btn-container text-2xl flex flex-col md:w-1/3">
              <button className="job-btn">All</button>
              <button className="job-btn">UI/UX</button>
              <button className="job-btn">Frontend</button>
              <button className="job-btn">Backend</button>
            </div>
            <div className="job-info md:w-2/3">
              <h3 className="text-3xl">Job Title</h3>
              <h4 className="text-2xl">Company Name</h4>
              <p className="job-date text-lg">Jan 2022 - Dec 2022</p>
              <div className="job-desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum viverra suscipit lorem ac lacinia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Netlify;
