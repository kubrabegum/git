import React from "react";
import Search from "./Search";
// import { Link } from 'react-router-dom'
const Home = ({ users,searchUser }) => {
  console.log(users);

  return (
    <center>
        <Search searhUser={searchUser}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols- gap-4 mt-5">
        {users &&
          users.map((ele, index) => (
            <div key={index}>
              <div className="side shadow-md p-5 ml-10 mr-10">
                <img
                  className='md:w-32 lg:w-48"'
                  src={ele.avatar_url}
                  alt="profilepic"
                />
                <h2 className="text-2xl p-2">{ele.login}</h2>
                <button className="rounded-full ... bg-blue-500 p-2 text-2xl blur- text-white">
                  Profile
                </button>
              </div>
            </div>
          ))}
      </div>
    </center>
  );
};

export default Home;
