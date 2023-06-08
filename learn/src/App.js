import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import axios from "axios";
import User from "./components/User";
import { Routes, Route } from "react-router-dom";
import GitUser from "./Apna/User";
import Netlify from "./Apna/Netlify";
function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading,setLoading]=useState(false)

  const singleUser = async (username) => {
    try {
      setLoading(true)
      let { data } = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          auth: {
            username: "kubrabegum",
            password: "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",
          },
        }
      );
      console.log(data);
      setUser(data);

      let res = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=desc&per_page=5`,
        {
          auth: {
            username: "kubrabegum",
            password: "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",
          },
        }
      );
      setRepos(res.data);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  const searchUser = async (username) => {
    try {
      setLoading(true)
      let { data } = await axios.get(
        `https://api.github.com/search/users?q=${username}`,
        {
          auth: {
            username: "kubrabegum",
            password: "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",
          },
        }
      );

      // console.log(data.items)
      setUsers(data.items);
      setLoading(false)
      console.log(data.items, "main");
    } catch (error) {
      console.error(error.response.data);
    }
  };
  useEffect(() => {
    setLoading(true)
    const fetchUsers = async () => {
      try {
        let { data } = await axios.get("https://api.github.com/users", {
          auth: {
            username: "kubrabegum",
            password: "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",
          },
        });
        setUsers(data);
        setLoading(false)
        // console.log(data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home searchUser={searchUser} users={users} loading={loading} />}
        />
        <Route
          path="/user/:username"
          element={<User singleUser={singleUser} user={user} repos={repos} loading={loading} />}
        />
      </Routes>
      {/* <Netlify/> */}
    </>
  );
}

export default App;
