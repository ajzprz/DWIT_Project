import React from "react";
import {
  Stack,
  HStack,
  VStack,
  Input,
  Box,
  Text,
  Link,
  Center,
  // Spacer,
  // Image,
} from "@chakra-ui/react";
import NewsFeed from "../components/Feed/NewsFeed";

const Landingpage = () => {
  return (
    <Stack>
      <Box
        bgImage="url('https://thetravelhub.com/img/poster/home-video-poster-min.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        h="70vh"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        <VStack spacing={8}>
          <HStack fontSize={{ base: "sm", sm: "25px", md: "40px", lg: "45px" }}>
            <Text fontWeight={"extrabold"} color="white">
              Socially.
            </Text>
            <Text fontWeight={"extrabold"} color="white">
              Inspired.
            </Text>
            <Text fontWeight={"extrabold"} color="white">
              Travel.
            </Text>
          </HStack>

          <Input
            variant="filled"
            placeholder="Search Travel Stories"
            size="lg"
            _placeholder={{ textAlign: "center" }}
            bgColor="#c6f6d5b5"
            _focus={{ bgColor: "#c6f6d5b5" }}
          />
        </VStack>
      </Box>
      <HStack
        mt={[" 0 !important"]}
        fontSize={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
        p={4}
        spacing={16}
        justifyContent="center"
        bgGradient="linear(to-l, blue.300, blue.600, pink.700) "
      >
        <Link color="whiteAlpha.800" as={""} to="/home" _hover={{color:"black"}}>
          OUR STORY
        </Link>
        <Link color="whiteAlpha.800" as={""} to="/home"  _hover={{color:"black"}}>
          BE INSPIRED
        </Link>
        <Link color="whiteAlpha.800" as={""} to="/home"  _hover={{color:"black"}}>
          CURATED TRAVEL
        </Link>
        <Link color="whiteAlpha.800" as={""} to="/home"  _hover={{color:"black"}}>
          OUR COMMUNITY
        </Link>
        <Link color="whiteAlpha.800" as={""} to="/home"  _hover={{color:"black"}}>
          THE LOUNGE
        </Link>
      </HStack>

      <Center py={4}>
        <Text fontSize="xl" fontWeight={"extrabold"} colorScheme={"blackAlpha"}>
          {" "}
          Our Stories{" "}
        </Text>
      </Center>
      <NewsFeed />
    </Stack>
  );
};

export default Landingpage;
