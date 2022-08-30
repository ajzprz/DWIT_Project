import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouteLink, useNavigate } from "react-router-dom";
// import axios from "axios";
import { authActions, getLoginData } from "../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const isLoggedIn  = useSelector(
    state => state.auth.isLoggedIn
  );

  const {isAuthenticated, token,data} = useSelector((state) =>state.auth);
  const handleUserLogin = (e) => {
    e.preventDefault();
    dispatch(getLoginData({email,password}))
    if(isAuthenticated){
    dispatch( authActions.login());
    console.log(data)
    navigate("/")
    // localStorage.setItem('jwt', token )
  }
  else{
    setMessage('Sorry Incorrect Password')
  }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <form onSubmit={handleUserLogin}>
      <FormControl spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link as={RouteLink} to="/resetpassword" color={"blue.400"}>
                  Forgot password?
                </Link>
              </Stack>
              <Text textAlign={"center"}>{message}</Text>
              <Button
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </FormControl>
      </form>
    </Flex>
  );
};

export default Login;
