import {
  Badge,
  Box,
  Link,
  Image,
  Text,
  Wrap,
  WrapItem,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouteLink } from "react-router-dom";
// import { NameContext } from "../..";
import { getPostsData } from "../../store/slices/postSlice";
import { getLoginData } from "../../store/slices/signInSlice";
// import useFetch from "../../hooks/hooks";

const NewsFeed = () => {
  const { posts, isLoading, error } = useSelector((state) => state.post);
  const { users, isAuthenticated } = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  console.log(posts, isLoading, error, isAuthenticated,users);

  useEffect(() => {
    dispatch(getPostsData())
    dispatch(getLoginData());
  }, []);

  return (
    <Wrap px={18} spacing={15} className="newsfeed">
      {isLoading && !error && (
        <Box padding="6" w="40%" boxShadow="lg" bg="white">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
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
               
                <HStack alignItems="start">
                  <Box overflow='hidden' h={200} w="50%" position="relative">
                    {!post.image ? (
                      <Image
                        w="500px"
                        h='100%'
                        src="https://bitsofco.de/content/images/2018/12/broken-1.png"
                        alt="location image"
                        loading="lazy"
                        overflow='hidden'
                      />
                    ) : (
                      <Image
                        src={post.image}
                        alt="Location image"
                        transition="0.5s linear"
                        loading="lazy"
                        overflow='hidden'
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    )}

                    {isAuthenticated &&  
                    <HStack
                      w="100%"
                      justifyContent="space-between"
                      // bgColor={"blackAlpha.700"}
                      position={"absolute"}
                      bottom={4}
                      left={0}
                    >
                      <Button>Edit</Button>
                      <Button>Delete</Button>
                    </HStack>
                    }
                    <Badge
                  position="absolute"
                  left={2}
                  top={2}
                  borderRadius="full"
                  px="2"
                  colorScheme="teal"
                  >
                  New
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
