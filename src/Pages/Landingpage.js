import React from "react";
import {
  Stack,

  // Spacer,
  // Image,
} from "@chakra-ui/react";
import NewsFeed from "../components/Feed/NewsFeed";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import HomePage from "./HomePage";

const Landingpage = () => {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Stack>
      {/* {!isLoggedIn && <Login />} */}
      <HomePage />
      <NewsFeed />
    </Stack>
  );
};

export default Landingpage;
