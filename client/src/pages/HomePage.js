import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
const HomePage = () => {
  return (
    <>
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1p"
        >
          <Text
            fontSize="4xl"
            color="black"
            fontStyle="bold"
            fontFamily="work sans"
            textAlign="center"
          >
            chat-app
          </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs variant="soft-rounded" >
            <TabList mb="1em">
              <Tab w="50%">Login</Tab>
              <Tab w="50%">Sign-Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>{<Login/>}</p>
              </TabPanel>
              <TabPanel>
                <p><SignUp/></p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
