import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  space,
  Square,
  Stack,
  StackDivider,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import React from "react";

const Dashboard = () => {
  return (
    <Flex>
        <HStack my={24} w='100vw'p={6}>
      <VStack w='20%' spacing={4} bgColor='blue.300' h='60vh' p={8}>
        <Text>Profile</Text>
        <Divider/>
        <Text>My Posts</Text>
        <Divider/>
        <Text>Friends</Text>
        <Divider/>
        <Text>Setting</Text>
        <Divider/>
      </VStack>
      <Box w='80%' alignSelf='start' px={8}>
        <Text>Welcome User!!</Text>
      </Box>
      </HStack>
    </Flex>
  );
};

export default Dashboard;
