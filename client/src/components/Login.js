import {
  InputRightElement,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  InputGroup,
  IconButton,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const toast = useToast();
  let history = useHistory();
  let [show, setShow] = useState(false);
  const onClickHide = () => {
    setShow(!show);
  };
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  let { email, password } = login;

  const onChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    try {
      let res = await axios.post(`api/user/login`, login);
      console.log(res);
      let token = res.data.token;
      localStorage.setItem("token", token);
      console.log(token);
      if (res && token) {
        toast({
          title: "User Login Sucessfully",
          status: "success",
          description: res.data.success,
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        history.push("/chats");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error to Login",
        description: error.res.data.error,
        status: error.response.data.status,
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  return (
    <>
      <VStack>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" name="email" value={email} onChange={onChange} />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              name="password"
              value={password}
              onChange={onChange}
            />
            <InputRightElement>
              <IconButton
                icon={show ? <FaEyeSlash /> : <FaEye />}
                aria-label={show ? "Hide" : "Show"}
                onClick={onClickHide}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          <Button type="submit" colorScheme="blue" onClick={onSubmitHandler}>
            Submit
          </Button>
        </FormControl>
      </VStack>
    </>
  );
};

export default Login;
