import React from "react";
import {Link as RouteLink} from 'react-router-dom'
import {
  HStack,
  Image,
  VStack,
  Link,
  Input,
  Box,
  Spacer,
  Divider,
  Button,
} from "@chakra-ui/react";
import {useCookies} from 'react-cookie';
import axios from "axios";


const Navbar = () => {
  const [cookies, setCookie,removeCookie] = useCookies('');

  const logOut = async() =>{
    let response = await axios.post('http://localhost:8000/user/logout')
    if(response){
      window.location.assign('/login')
      removeCookie('Id',{path:'/'})
    }
  }
  return (
    <HStack p={4} zIndex={100} w="100%" as ="header" position="fixed" backgroundColor="rgba(255, 
      255, 255, 0.90)" justifyContent='flex-end'  className="Navbar" boxShadow="md">
        <RouteLink to='/'>
          <Image
            position={"absolute"}
            left={10}
            bottom={-50}
            h={100}
            w={100}
            src="https://thetravelhub.com/img/tth-logo-small.png"
            alt="Logo"
          />
        </RouteLink>
        <Box>
          <Link mr={4} color='teal.700' fontWeight='bold' as= {RouteLink}  to="/signup" >
            Sign Up
          </Link>
          <Link color='teal.700' fontWeight='bold' mr={10} as= {RouteLink} to="/login" >
            Login
          </Link>
          <Link onClick={logOut} color='teal.700' fontWeight='bold' mr={10} as= {RouteLink} to="/login" >
            Log out
          </Link>
        </Box>
      </HStack>

  );
};

export default Navbar;
