import {
  Badge,
  Box,
  Link,
  Image,
  Text,
  Wrap,
  WrapItem,
  HStack,
  Center,
  Skeleton,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouteLink } from "react-router-dom";
// import { NameContext } from "../..";
import { getPostsData } from "../../store/slices/postSlice";
// import useFetch from "../../hooks/hooks";

const NewsFeed = () => {
  const { posts, isLoading, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  console.log(posts)

  useEffect(() => {
    dispatch(getPostsData());

  }, []);

  return (
    <Wrap px={18} spacing={15} className="newsfeed" >
      {isLoading && !error && <Skeleton height="220px" />}
      {error && <p>{error}</p>}

      {!isLoading &&
        !error &&
        posts &&
        posts.map((post, index) => {
          return (
            <Link key={index} as={RouteLink} to={`posts/${post._id}`}>
              <WrapItem
                className="post"
                position="relative"
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
                <Badge
                  position="absolute"
                  left={5}
                  top={5}
                  borderRadius="full"
                  px="2"
                  colorScheme="teal"
                >
                  New
                </Badge>
                <HStack alignItems="start">
                  <Box overflow={"hidden"} h={200} w="50%">
                    {!post.image   ? (
                      <Image
                        w='500px'
                        h='190px'
                        src='https://bitsofco.de/content/images/2018/12/broken-1.png'
                        alt ='location image'
                      />
                    ) : (
                      <Image
                        src={post.image}
                        alt='Location image'
                        transition="0.5s linear"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    )}
                  </Box>
                  <Box w="50%" display="flex" flexDirection='column' alignItems="baseline">
                    <Box >
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
                            color={i < post.rating ? "white.500" : "blue.300"}
                          />
                        ))}
                      <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {post.reviews} reviews
                      </Box>
                    </Box>
                    <Box py={4}>
                        <Text> Author: 'Author Name'</Text>
                      </Box>
                  </Box>
                </HStack>
              </WrapItem>
            </Link>
          );
        })}
    </Wrap>
  );
};

export default NewsFeed;
