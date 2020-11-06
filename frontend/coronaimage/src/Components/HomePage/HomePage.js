import React from "react";
import {
  Button,
  Flex,
  useToast,
  useColorMode,
  FormControl,
  Input,
  Spinner,
} from "@chakra-ui/core";
import Navbar from "../Navbar/Navbar";

const HomePage = () => {


  

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Flex align="center" justify="center" height="100vh" direction="column">
        <Spinner />
      </Flex>
    </React.Fragment>
  );
};

export default HomePage;