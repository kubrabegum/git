import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  InputRightElement,
  IconButton,
  InputGroup,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const SignUp = () => {
  const toast=useToast()
  const [show, setShow] = useState(false);
  const [showConfirm, setShoeConfirm] = useState(false);
  let [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    phone: "",
    pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  });
  let { username, email, password, password2, phone, pic } = register;
  const onChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      let res = await axios.post(`api/user/register`, register);
      console.log(res.data);
      if(res.data){
        toast({
          title:"User Registered Sucessfully" ,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        })
      }
    } catch (error) {
      console.error(error);
      toast({
        title: error.response.data.error,
        status: error.response.data.status,
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      })
    }
  };

  const onClickHide = () => {
    setShow(!show);
  };

  const onClickConfirm = () => {
    setShoeConfirm(!showConfirm);
  };
  return (
    <>
      <VStack>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>phone</FormLabel>
          <Input type="text" value={phone} name="phone" onChange={onChange} />
        </FormControl>
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
                aria-label={show ? "Hide password" : "Show password"}
                onClick={onClickHide}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              type={showConfirm ? "text" : "password"}
              name="password2"
              value={password2}
              onChange={onChange}
            />
            <InputRightElement>
              <IconButton
                icon={showConfirm ? <FaEyeSlash /> : <FaEye />}
                aria-label={showConfirm ? "Hide password" : "Show password"}
                onClick={onClickConfirm}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Choose Profile Pic</FormLabel>
          <Input type="file" name="pic"id="pic" />
        </FormControl>
        <FormControl>
          <Button type="submit" colorScheme="blue" onClick={onSubmitHandler}>
            Submit
          </Button>
          <FormHelperText>
            Already have an account?<Button>Login</Button>
          </FormHelperText>
        </FormControl>
      </VStack>
    </>
  );
};

export default SignUp;
