import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const chatContext = createContext();
const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectChat,setselectChat]=useState()
  const [chat,setChat]=useState();
  const history = useHistory();

  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log(token)
    token = JSON.parse(token)    
    setUser(token);
    if (!token) {
      history.push("/");
    }
  }, [history]);
  return (
    
      <chatContext.Provider value={{ user, setUser, selectChat,setselectChat,chat,setChat }}>
        {children}
      </chatContext.Provider>
  
  );
};
export const ChatState = () =>useContext(chatContext);

export default ChatProvider;
