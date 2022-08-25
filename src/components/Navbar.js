import React from "react";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import {
  HStack,
  Image,
  Link,
  Box,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const logOut = (e) => {
    e.preventDefault();
    dispatch(authActions.logOut());
    navigate('/login')
  };

  return (
    <HStack
      p={4}
      zIndex={100}
      w="100%"
      as="header"
      position="fixed"
      backgroundColor="rgba(255, 
      255, 255, 0.90)"
      justifyContent="flex-end"
      className="Navbar"
      boxShadow="md"
    >
      <RouteLink to="/">
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

      {!isLoggedIn && (
        <Box>
          <Link
            mr={4}
            color="teal.700"
            fontWeight="bold"
            as={RouteLink}
            to="/signup"
          >
            Sign Up
          </Link> 
          <Link
            color="teal.700"
            fontWeight="bold"
            mr={10}
            as={RouteLink}
            to="/login"
          >
            Login
          </Link>
        </Box>
      )}

      {isLoggedIn && (
        <Box>
          <Link
            onClick={logOut}
            color="teal.700"
            fontWeight="bold"
            mr={10}
          >
            Log out
          </Link>
        </Box>
      )}
    </HStack>
  );
};

export default Navbar;
