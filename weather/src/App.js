import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Quizzz from "./components/Quizzz";
import Tours from "./components/Tours";
import Form from "./netlify/Form";
import Netlify from "./netlify/Netlify";
import UseREfff from "./netlify/UseREfff";
import Review from "./review/Review";

function App() {
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    let { data } = await axios.get(
      "https://course-api.com/react-tours-project"
    );
    setTours(data);
    // console.log(data);
  };

  const remove = (id) => {
    let newTour = tours.filter((ele) => ele.id !== id);
    setTours(newTour);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {/* <button className="text-center bg-sky-400 p-2 ml-8 mt-3 text-white rounded-md" onClick={fetchData}>Refresh</button> this is for tours*/}
      <div className="justify-center m-4">
        {/* <Tours tours={tours} remove={remove} /> */}
        {/* <Review/> */}
        {/* <Netlify/> */}
        {/* <UseREfff/> */}
        {/* <Form/> */}
        <Quizzz/>
      </div>
    </>
  );
}

export default App;
