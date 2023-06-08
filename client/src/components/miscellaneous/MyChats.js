import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Stack, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import ChatProvider from "../../context/ChatProvide";
import ChatLoading from "../ChatLoading";

const MyChats = () => {
  const [logged, setLogged] = useState();
  const { user, setUser, selectChat, setselectChat, chat, setChat } =
    ChatProvider();
  const toast = useToast();

  const fetchChat = async () => {
    try {
      // const token=localStorage.getItem("token")
      // const {data}=await axios.get(`api/chat`,{
      //   headers:{
      //     "auth-token":token
      //   }
      // });
      // setChat(data)
    } catch (error) {
      toast({
        title: "Error.",
        description: "Failed to load user",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      console.error(error);
    }
  };

  return (
    <Box
      d={{ base: selectChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      p={3}
      bg="white"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily="Work sans"
        d="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        My chats
        <Button
          d="flex"
          fontSize={{ base: "17px", md: "10px", lg: "17px" }}
          rightIcon={<AddIcon />}
        >
          New Group Chat
        </Button>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        p={3}
        bg="#F8F8F8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        {
          chat?(
            <Stack overflowY="scroll">
              {
                chat.map((chat)=>(
                  <Box 
                  onClick={() => setselectChat(chat)}
                  cursor="pointer"
                  bg={selectChat === chat ? "#38B2AC" : "#E8E8E8"}
                  color={selectChat === chat ? "white" : "black"}
                  px={3}
                  py={2}
                  borderRadius="lg"
                  key={chat._id}
                  >

                  </Box>
                ))
              }
            </Stack>
          ):(
            <ChatLoading/>
          )
        }
      </Box>
    </Box>
  );
};

export default MyChats;
