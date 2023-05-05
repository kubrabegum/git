import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import axios from "axios";
function App() {
  const [users, setUsers] = useState([]);

  const searchUser=async(username)=>{
    try {
      let { data } = await axios.get(`https://api.github.com/users/${username}`, {
        auth: {
          username: "kubrabegum",
          password: "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",
        },
      });
      setUsers(data);

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let { data } = await axios.get("https://api.github.com/users", {
          auth: {
            username: "kubrabegum",
            password: "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",
          },
        });
        setUsers(data);
        // console.log(data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      <Home 
      searchUser={searchUser}
      users={users}/>
    </>
  );
}

export default App;
