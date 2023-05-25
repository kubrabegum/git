import { useToast } from "@chakra-ui/toast";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Search from "./Search";
// import { Link } from 'react-router-dom'
const Home = ({ users,searchUser,loading }) => {
  const toast=useToast()
  // console.log(users);
  // console.log(searchUser)

  return (
    <center>
      <Search searchUser={searchUser}  />
      {loading&&<Loading/>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
        {users &&
          users.map((ele, index) => (
            <div key={index}>
              <div className="side shadow-md p-5 ml-10 mr-10 mt-5 bg-gray-100 rounded-sm">
                <img
                  className='md:w-32 lg:w-48" '
                  src={ele.avatar_url}
                  alt="profilepic"
                />
                <h2 className="text-2xl p-2">{ele.login}</h2>
                <div className="rounded-full ... bg-blue-500 p-2 text-2xl blur- text-white">
                <Link to={`/user/${ele.login}`}>Profile</Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </center>
  );
};

export default Home;
