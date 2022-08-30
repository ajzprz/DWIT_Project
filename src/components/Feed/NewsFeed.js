import {
  Badge,
  Box,
  Link,
  Image,
  Text,
  Wrap,
  WrapItem,
  HStack,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Center,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouteLink } from "react-router-dom";
// import { NameContext } from "../..";
import { getPostsData } from "../../store/slices/postSlice";

const NewsFeed = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const {user} = useSelector(state => state.auth)
  const {posts, isLoading, error } = useSelector(state => state.post)
  // console.log(posts, error, isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsData());
    console.log(posts.author)
    try {
      if(isLoggedIn){
    console.log(user[0].firstName)
  }
    } catch (error) {
      console.error(error)
    }
  }, []);


  // const handleEdit = async (e) =>{
  //   const response = axios.put(`http://localhost:8000/posts/${postId}`)
  //   console.log('response')
  // }
  

  return (
    <Stack>
      <Center py={4}>
        <Text fontSize="xl" fontWeight={"extrabold"} colorScheme={"blackAlpha"}>
          Our Stories
        </Text>
      </Center>

      <Wrap px={18} paddingBottom={10} spacing={15} className="newsfeed">
        {isLoading && !error && (
          <Box padding="6" w="40%" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        )}
        {!isLoading && error && (
          <Box padding="6" w="40%" boxShadow="lg" bg="white">
            <Text>Unable to fetch</Text>
          </Box>
        )}

        {!isLoading &&
          !error &&
          posts &&
          posts.map((post, index) => {
            return (
                <Link key={index} as={RouteLink} to={`posts/${post._id}`}>
                  <WrapItem
                    className="post"
                    p={2}
                    key={index}
                    w={600}
                    borderWidth="1px"
                    overflow="hidden"
                    boxShadow="base"
                    _hover={{
                      background: "teal.200",
                    }}
                  >
                    <HStack alignItems="start" w='100%'>
                      <Box
                        position="relative"
                        overflow="hidden"
                        h={200}
                        w="50%"
                      >
                        {!post.image ? (
                          <Image
                            w="500px"
                            h="100%"
                            src="https://bitsofco.de/content/images/2018/12/broken-1.png"
                            alt="location image"
                            loading="lazy"
                            overflow="hidden"
                          />
                        ) : (
                          <Image
                            src={post.image}
                            alt="Location image"
                            transition="0.5s linear"
                            loading="lazy"
                            overflow="hidden"
                            _hover={{ transform: "scale(1.2)" }}
                          />
                        )}

                        <Badge
                          position="absolute"
                          left={2}
                          top={2}
                          borderRadius="full"
                          px="2"
                          colorScheme="teal"
                        >
                          New!
                        </Badge>
                      </Box>
                      <Box
                        w="50%"
                        display="flex"
                        flexDirection="column"
                        alignItems="baseline"
                      >
                        <Box>
                          <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                          >
                            {post.location} &bull; {post.heritages}
                          </Box>
                        </Box>

                        <Box
                          mt="1"
                          fontWeight="semibold"
                          as="h4"
                          lineHeight="tight"
                          noOfLines={2}
                        >
                          {post.title}
                        </Box>

                        <Box>
                          <Text>${post.cost} / wk </Text>
                          <Box as="span" color="gray.600" fontSize="sm"></Box>
                        </Box>

                        <Box display="flex" mt="2" alignItems="center">
                          {Array(5)
                            .fill("")
                            .map((_, i) => (
                              <FaStar
                                key={i}
                                color={
                                  i < post.rating ? "white.500" : "blue.300"
                                }
                              />
                            ))}
                          <Box as="span" ml="2" color="gray.600" fontSize="sm">
                            {post.reviews} reviews
                          </Box>
                        </Box>
                        <Box py={4}>
                          <Text> Author: {post.author}</Text>
                        </Box>
                      </Box>
                    </HStack>
                  </WrapItem>
                </Link>
            );
          })}
      </Wrap>
      {isLoggedIn && (
        <Link
          as={RouteLink}
          to="/posts/addPost"
          p={4}
          border="1px"
          backgroundColor="#2b6cb0"
          color={"white"}
          borderRadius="10px"
          height="fit-content"
          width="fit-content"
        >
          New Post
        </Link>
      )}
    </Stack>
  );
};

export default NewsFeed;
