import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Textarea,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const { user } = useSelector((state) => state.auth);
  const { singlePost } = useSelector((state) => state.singlePost);

  const [author, setAuthor] = useState(`${singlePost.Author}`);
  const [title, setTitle] = useState(`${singlePost.title}`);
  const [location, setLocation] = useState(`${singlePost.location}`);
  const [image, setImage] = useState(`${singlePost.image}`);
  const [heritages, setHeritages] = useState(`${singlePost.heritages}`);
  const [firstParagraph, setFirstParagraph] = useState(`${singlePost.firstParagraph}`);
  const [secondParagraph, setSecondParagraph] = useState(`${singlePost.secondParagraph}`);
  const [thirdParagraph, setThirdParagraph] = useState(`${singlePost.thirdParagraph}`);
  const [suggestion, setSuggestion] = useState(`${singlePost.suggestion}`);
  const [cost, setCost] = useState(0);
  const [rating, setRating] = useState(5);
  const [latitude, setLatitude] = useState("27.6936951");
  const [longitude, setLongitude] = useState("85.0969408");

  const [showTooltip] = useState(false);
  const navigate = useNavigate();

  const postId = useParams();

  // console.log(singlePost)

  const handleNewPost = async (e) => {
    e.preventDefault();
    const response = axios.put(`http://localhost:8000/posts/${postId}`, {
      author,
      title,
      location,
      heritages,
      firstParagraph,
      secondParagraph,
      thirdParagraph,
      suggestion,
      image,
      cost,
      rating,
      latitude,
      longitude,
    });
    console.log(response);
    navigate(`/`);
    return response;
  };

  return (
    <Flex justifyContent="space-around">
      <VStack p={10}>
        <Heading as="h2" textAlign="start" textTransform="uppercase">
          Share your experience
        </Heading>
        <Divider />
        <form onSubmit={handleNewPost}>
          <FormControl w="60vw" isRequired>
            <VStack
              spacing={4}
              alignItems="start"
              bgColor="white"
              p="20px"
              borderRadius={"lg"}
            >
              <Heading as="h5" size="sm" textTransform="uppercase">
                {" "}
                Primary Details{" "}
              </Heading>
              <Divider />
              <FormLabel>Author</FormLabel>
              <Input
                type="text"
                // placeholder={user.user[0].firstName}
                value={user[0].firstName}
                onChange={(e) => setAuthor(e.target.value)}
              />

              <FormLabel>Title of Your Travel Experience</FormLabel>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormLabel>Location</FormLabel>
              <Input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />

              <HStack>
                <FormLabel>Latitude</FormLabel>
                <Input
                  type="number"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />

                <FormLabel>Longitude</FormLabel>
                <Input
                  type="number"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </HStack>
              <FormLabel>Images of Location</FormLabel>
              <Input
                border="dotted"
                p={1}
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <FormLabel>Heritages of the Loaction</FormLabel>
              <Input
                type="text"
                value={heritages}
                onChange={(e) => setHeritages(e.target.value)}
              />

              <FormLabel>Estimated Cost</FormLabel>
              <Input
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />

              <FormLabel>Your Rating</FormLabel>
              <Slider
                min={0}
                max={5}
                defaultValue={rating}
                onChangeEnd={(e) => setRating(e)}
              >
                <SliderMark value={0} mt="1" ml="-2.5" fontSize="sm">
                  0
                </SliderMark>
                <SliderMark value={1} mt="1" ml="-2.5" fontSize="sm">
                  1
                </SliderMark>
                <SliderMark value={2} mt="1" ml="-2.5" fontSize="sm">
                  2
                </SliderMark>
                <SliderMark value={3} mt="1" ml="-2.5" fontSize="sm">
                  3
                </SliderMark>
                <SliderMark value={4} mt="1" ml="-2.5" fontSize="sm">
                  4
                </SliderMark>
                <SliderMark value={5} mt="1" ml="-2.5" fontSize="sm">
                  5
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                  hasArrow
                  bg="teal.500"
                  color="white"
                  placement="top"
                  isOpen={showTooltip}
                  label={`${rating}%`}
                >
                  <SliderThumb />
                </Tooltip>
              </Slider>
            </VStack>

            <VStack
              spacing={4}
              alignItems="start"
              mt={3}
              bgColor="white"
              p="20px"
              borderRadius={"lg"}
            >
              <Heading as="h5" size="sm" textTransform="uppercase">
                {" "}
                Share Your Experiences{" "}
              </Heading>
              <Divider />
              <FormLabel>First Paragraph </FormLabel>
              <Textarea
                type="text"
                value={firstParagraph}
                onChange={(e) => setFirstParagraph(e.target.value)}
              />
              <FormLabel>Second Paragraph</FormLabel>
              <Textarea
                type="text"
                value={secondParagraph}
                onChange={(e) => setSecondParagraph(e.target.value)}
              />
              <FormLabel>Third Paragraph</FormLabel>
              <Textarea
                type="text"
                value={thirdParagraph}
                onChange={(e) => setThirdParagraph(e.target.value)}
              />
              <FormLabel>Suggestion For Your Viewers</FormLabel>
              <Textarea
                type="text"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
              />
              <Button type="submit">Submit</Button>
            </VStack>
          </FormControl>
        </form>
      </VStack>
    </Flex>
  );
};

export default EditPost;
