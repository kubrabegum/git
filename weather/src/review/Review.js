import React, { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { image, name, id, job, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const fetchPlus = () => {
    setIndex(checkNumber(index + 1));
  };

  const fetchMinus = () => {
    setIndex(checkNumber(index - 1));
  };

  const surprise=()=>{
    let random=Math.floor(Math.random()*reviews.length)
    if(random===index){
        random = index+1
    }
    setIndex(checkNumber(random))
  }

  return (
    <div>
      <article className="review bg-white p-6 rounded shadow transition-colors">
        <div className="img-container relative w-36 h-36 mx-auto mb-6">
          <img
            src={image}
            alt="nameeepic"
            className="person-img w-full h-full object-cover rounded-full"
          />
          <span className="quote-icon absolute top-0 left-0 w-10 h-20 grid place-items-center rounded-full transform -translate-y-1/4 bg-primary-5 text-blue-500">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author text-xl mb-1">{name}</h4>
        <p className="job uppercase text-2xl">{job}</p>
        <p className="info mb-3 text-gray-500">{text}</p>
        <div className="ml-[40%]">
          <button
            onClick={fetchMinus}
            className="prev-btn text-primary-7 text-xl bg-transparent border-none mx-1 transition-colors cursor-pointer"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={fetchPlus}
            className="next-btn text-primary-7 text-xl bg-transparent border-none mx-1 transition-colors cursor-pointer"
          >
            <FaChevronRight />
          </button>
        </div>
        <button onClick={surprise} className="bg-blue-400 text-white text-bold py-1 px-2 mt-2 rounded ml-[35%]">
          surprise me
        </button>
      </article>
    </div>
  );
};

export default Review;
