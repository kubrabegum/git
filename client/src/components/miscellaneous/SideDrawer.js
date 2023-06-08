import React, { useState } from "react";
import { ChatState } from "../../context/ChatProvide";
import {
  Tooltip,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Avatar,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Input,
  useToast,
} from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/layout";
import ProfileModal from "./ProfileModal";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ChatLoading from "../ChatLoading";
import UserListItem from "../userAvatar/UserListItem";
// import {  } from "react-bootstrap";
const SideDrawer = () => {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const [searshResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState("");
  const { user,selectChat,setselectChat,chat,setChat } = ChatState();
  console.log(user);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const onChange=(e)=>{
    setSearch(e.target.value)
  }

  const toast = useToast();
  const HandleSearch = async () => {
   try {
    if (!search) {
      toast({
        title: "Please Enter the User Name or Email.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
    const token=localStorage.getItem("token")
    const response=await axios.get(`api/user?search=${search}`,{
      headers:{
       " auth-token":token
      }
    })
    setSearch(response)
   } catch (error) {
    toast({
      title: "Error.",
      description:"Failed to load user",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
    console.error(error)
   }
  };

  const accessChat=async(userId)=>{
    try {
      setLoading(true);
     const token=localStorage.getItem("token");
     const {data}=await axios.post(`api/chat`,{userId},{
      headers:{
        "auth-token":token
      }
     })
    //  setChat()
     setselectChat(data) ;
     setLoading(false);
     onClose();
    } catch (error) {
      toast({
        title: "Error.",
        description:"Failed to load user",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      console.error(error)
    }
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
            <i class="fas fa-search"></i>
            <Text display={{ base: "none", md: "flex" }} px="4">
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="work sans">
          Chat-App
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              name={user.username}
            >
              <Avatar size="sm" cursor="pointer" />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <ProfileModal user={user} />
              </MenuItem>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search User</DrawerHeader>
          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input 
                placeholder="search by name or email"
                mr={2}
                value={search}
                onChange={onChange}
              />
              <Button onClick={HandleSearch}>Go</Button>
            </Box>
            {
              loading?<ChatLoading/>:<UserListItem/>
              // (
              //   search?.map(user=>(
              //     <UserListItem key={user._id}
              //     user={user}
              //     hanDleFunction={()=> accessChat(user._id)}/>
              //   ))
              // )
            }
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
