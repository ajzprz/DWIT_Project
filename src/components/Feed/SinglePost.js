import React, { useEffect } from "react";
import {
  Box,
  Stack,
  Text,
  Image,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  AspectRatio,
  HStack,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { MdTravelExplore } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { getSinglePostData } from "../../store/slices/singlePostSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const SinglePost = () => {
  const { singlePost, isLoading, error } = useSelector(
    (state) => state.singlePost
  );

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    dispatch(getSinglePostData(`${postId}`));
  }, []);
  // console.log(`${postId}`);
  // console.log(singlePost);

const handleDelete = (e) => {
  const resposne = axios.delete(`http://localhost:8000/posts/${postId}`);
  navigate('/')
  console.log(postId)
  return resposne;
};

const handleEditRoute = (e) => {
  navigate(`/editPost/${postId}`)

};
  
  return (
    <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} p ={4} w='60vw' bgColor='whiteAlpha.600' borderRadius='lg'>
      {isLoading && !error && <Box padding="6" w="40%" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>}

      <Stack spacing={{ base: 6, md: 10 }}>
        <VStack as={"header"} gap={4}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", lg: "4xl", md: "2xl" }}
          >
            {singlePost.title}
          </Heading>
          <HStack w='100%' justifyContent='space-between'>
          <Text
            color={useColorModeValue("gray.900", "gray.400")}
            fontWeight={300}
            fontSize={"1xl"}
          >
            Author : Author
            </Text>
            <Text
            color={useColorModeValue("gray.900", "gray.400")}
            fontWeight={300}
            fontSize={"1xl"}
          >
            Estimated Cost : ${singlePost.cost}
          </Text>
          </HStack>
        {isLoggedIn && (
                <HStack
                  w="100%"
                  justifyContent="space-between"
                  // bgColor={"blackAlpha.700"}
                >
                  <Button colorScheme='blue' onClick={handleEditRoute}>Edit</Button>
                  <Button colorScheme="red" onClick={handleDelete}>Delete</Button>
                </HStack>
              )}
        </VStack>
        {!singlePost.image ?  
        <Image
        rounded={"md"}
        alt={"product image"}
        src='https://bitsofco.de/content/images/2018/12/broken-1.png'
        fit={"cover"}
        align={"center"}
        w='-webkit-fill-available'
        h={{ base: "100%", sm: "400px", lg: "500px" }}
      /> :
        <Image
          rounded={"md"}
          alt={"product image"}
          src={singlePost.image}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%", sm: "400px", lg: "500px" }}
        />
        }

        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={"column"}
          divider={
            <StackDivider
              borderColor={useColorModeValue("gray.200", "gray.600")}
            />
          }
        >
          <VStack spacing={{ base: 4, sm: 6 }}>
            <Text
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize={"2xl"}
              fontWeight={"300"}
            >
              {singlePost.title}
            </Text>
            <Text textAlign={"justify"} id={'para_one'} fontSize={"lg"}>
              {singlePost.firstParagraph}
            </Text>
            <Text textAlign={"justify"} id={"para_two"} fontSize={"lg"}>
              {singlePost.secondParagraph}
            </Text>
            <Text textAlign={"justify"} id={"para_three"} fontSize={"lg"}>
              {singlePost.thirdParagraph}
            </Text>
          </VStack>
          <Box>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("yellow.500", "yellow.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}
            >
              Heritages
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <List spacing={2}>
                <ListItem>{singlePost.heritages}</ListItem>
                <ListItem>{singlePost.heritages}</ListItem>
                <ListItem>{singlePost.heritages}</ListItem>
              </List>
              <List spacing={2}>
                <ListItem>{singlePost.heritages}</ListItem>
                <ListItem>{singlePost.heritages}</ListItem>
                <ListItem>{singlePost.heritages}</ListItem>
              </List>
            </SimpleGrid>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("yellow.500", "yellow.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}
            >
              Pricing Details
            </Text>

            <List spacing={2}>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Lodging:
                </Text>{" "}
                100
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Fooding:
                </Text>{" "}
                100
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Shopping:
                </Text>{" "}
                100
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Transportation:
                </Text>{" "}
                100
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Guide:
                </Text>{" "}
                100
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Tourist Entry Fees:
                </Text>{" "}
                100
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Recomendations:
                </Text>{" "}
                Try Local Cuisine
              </ListItem>
            </List>
          </Box>
        </Stack>

        <Button
          rounded={"none"}
          w={"full"}
          mt={8}
          size={"lg"}
          py={"7"}
          bg={useColorModeValue("gray.900", "gray.50")}
          color={useColorModeValue("white", "gray.900")}
          textTransform={"uppercase"}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
        >
          Book a Trip
        </Button>

        <Stack direction="row" alignItems="center" justifyContent={"center"}>
          <MdTravelExplore />
          <Text>Lets Travel and Blog</Text>
        </Stack>

        <Text
          fontSize={{ base: "16px", lg: "18px" }}
          color={useColorModeValue("yellow.500", "yellow.300")}
          fontWeight={"500"}
          textTransform={"uppercase"}
          mb={"4"}
        >
          Location
        </Text>
        <AspectRatio>
          <iframe
            title="map"
            src ={singlePost.map}

            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </AspectRatio>
      </Stack>
    </SimpleGrid>
  );
};

export default SinglePost;
