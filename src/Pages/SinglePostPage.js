import {
  Box,
  Divider,
  Flex,
  Icon,
  Link,
  Square,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import SinglePost from "../components/Feed/SinglePost";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const SinglePostPage = () => {
  return (
    <Flex direction={"row"} pt={100} className="singlePost">
      <Square
        display="flex"
        justifyContent="start"
        flexDirection="column"
        mt={100}
        position="relative"
        w="20%"
        className="share-post"
      >
        <Box
          position='fixed'
          display="flex"
          justifyContent="start"
          flexDirection="column"
        >
          <Text
            fontSize="sm"
            fontWeight="extrabold"
            colorScheme={"blackAlpha"}
            textAlign="center"
          >
            SHARE THIS CONTENT
          </Text>
          <Divider
            alignSelf="center"
            w="40"
            borderColor="black"
            borderBottom="4px"
            orientation="horizontal"
          />
          <VStack
            mt={3}
            spacing={6}
            textAlign="center"
            justifyContent="space-around"
          >
            <Link
              to=""
              _hover={{
                transform: "scale(1.3)",
                color: "blue.500",
              }}
            >
              <Icon w={8} h={8} as={FaFacebook} />
            </Link>
            <Link
              to=""
              _hover={{
                transform: "scale(1.3)",
                color: "blue.500",
              }}
            >
              <Icon w={8} h={8} as={FaTwitter} />
            </Link>
            <Link
              to=""
              _hover={{
                transform: "scale(1.3)",
                color: "blue.500",
              }}
            >
              <Icon w={8} h={8} as={FaInstagram} />
            </Link>
          </VStack>
        </Box>
      </Square>
      {/* <Text>Hello</Text> */}



      <SinglePost />


      <Square
        mt={100}
        display="flex"
        justifyContent="start"
        top={0}
        flexDirection="column"
        position="relative"
        w="20%"
        className="navigation "
        textAlign="center"
      >
        <Box
          position="fixed"
          padding={4}
          display="flex"
          flexDirection="column"
          alignContent="center"
        >
          <Text
            fontSize="sm"
            fontWeight="extrabold"
            colorScheme={"blackAlpha"}
            textAlign="center"
            textTransform="uppercase"
          >
            Outlines Of Contents
          </Text>
          <Divider
            alignSelf="center"
            w="40"
            borderColor="black"
            borderBottom="4px"
            orientation="horizontal"
          />
          <Link
            to="/#para_one"
            p={3}
            _hover={{
              background: "grey.400",
              color: "blue.500",
            }}
          >
            <Text> Paragraph 1</Text>
            <Divider
              alignSelf="center"
              w="inherit"
              borderColor="black"
              borderBottom="1px dotted"
              orientation="horizontal"
            />
          </Link>

          <Link
            to="/#para_two"
            p={3}
            _hover={{
              background: "grey.400",
              color: "blue.500",
            }}
          >
            <Text> Paragraph 2</Text>
            <Divider
              alignSelf="center"
              w="inherit"
              borderColor="black"
              borderBottom="1px dotted"
              orientation="horizontal"
            />
          </Link>

          <Link
            to = "/#para-three"
            p={3}
            _hover={{
              background: "grey.400",
              color: "blue.500",
            }}
          >
            <Text> Paragraph 3</Text>
            <Divider
              alignSelf="center"
              w="inherit"
              borderColor="black"
              borderBottom="1px dotted"
              orientation="horizontal"
            />
          </Link>
        </Box>
      </Square>
    </Flex>
  );
};

export default SinglePostPage;
