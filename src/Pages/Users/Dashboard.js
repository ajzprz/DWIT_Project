import {
  Box,
  Divider,
  Flex,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";
import {  Link as RouteLink } from "react-router-dom";

import React from "react";
import Welcome from "../../components/Users/Welcome";
import Addpost from "../../components/Users/Addpost";
import Profile from "../../components/Users/Profile";
import Settings from "../../components/Users/Settings";

const Dashboard = () => {
  return (
    <Flex>
        <HStack my={24} w='100vw' p={6}>
      <VStack w='20%' spacing={4} bgColor='blue.300' p={8}>
      <Link as={RouteLink} to ="/user">Dashboard</Link>
        <Divider/>
        <Link as={RouteLink}  to="/user/profile">Profile</Link>
        <Divider/>
        <Link as={RouteLink} to="/user/posts">My Posts</Link>
        <Divider/>
        <Link as={RouteLink} to="/user/friends">Friends</Link>
        <Divider/>
        <Link as={RouteLink} to="/user/setting">Setting</Link>
        <Divider/>
      </VStack>
      <Box w='80%' alignSelf='start' px={8}>
        {/* <Welcome/>
        <Profile/>
        <Settings/>
        <Addpost/> */}
      </Box>
      </HStack>
    </Flex>
  );
};

export default Dashboard;
