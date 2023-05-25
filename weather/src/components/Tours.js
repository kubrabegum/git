import React, { useState } from "react";

const Tours = ({ tours, remove }) => {
  const [read, setRead] = useState(false);

  return (
    <>
      <div className="flex flex-wrap justify-between mb-4">
        {tours.map((ele) => (
          <div
            key={ele.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
          >
            <p className="text-xl font-bold mb-2">{ele.name}</p>
            <img
              src={ele.image}
              alt={ele.name}
              className="w-full h-auto mb-4 rounded-lg"
            />
            <p className="text-gray-600 mb-4">
              {read ? ele.info : ele.info.substring(0, 200)}
              <button
                onClick={() => setRead(!read)}
                className="bg-blue-400 rounded-md p-1 text-white"
              >
                {read ? "Read less" : "Read more"}
              </button>
            </p>

            <button
              onClick={() => remove(ele.id)}
              className="border border-red-700 bg-transparent text-red-700 text-sm px-2 py-1 rounded"
            >
              not interested
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tours;
