import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Badge,
} from '@chakra-ui/react';
import {Link as RouteLink} from 'react-router-dom'
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { getSignUpData } from "../store/slices/registerSlice";

// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Signup = () => {

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message,setMessage] = useState('')

  const {users, isAuthenticated, loading, error , status} = useSelector(
    (state) => state.signUp
  )

  const registerUser = (e) =>{
    e.preventDefault();
    dispatch(getSignUpData({firstName, lastName, email, password}))
    console.log( users)
    // if(users){
    //   // window.location.assign('/')
    // }
    // if (!users) {
    //   setMessage( <Badge textAlign='center'>Field cannot be empty</Badge>) 
    //   console.log('Input field empty')
    // }

  //   console.log( firstName, lastName, email, password)
  //   try {
  //     let response = await axios.post('http://localhost:8000/user/register',{
  //     firstName, lastName, email, password
  //   })

  // //   // console.log(response)
  //   if (response.status === 200) {
  //     setMessage( <Badge textAlign='center'>User Created Successfully</Badge>) 
  // //     console.log('user created')
  //     window.location.assign('/')
  //   }
  
   
  //   } catch (error) {
  //     console.log(error.response)
  //   }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e)=>setPassword(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    fontSize='20px'
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <FaEye /> : <FaEyeSlash  />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
              type='submit'
              onClick={registerUser}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
              <Text textAlign={'center'}>{message}</Text>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link as= {RouteLink} to='/login' color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Signup