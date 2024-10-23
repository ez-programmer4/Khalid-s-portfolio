import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  useColorMode,
  Icon,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import carImage from "../images/car.png";
import { languages } from "../data"; // Ensure additionalSkills is removed

const MyAdditionalSkills = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      id="additional-skills"
      minHeight="50vh"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      color={colorMode === "light" ? "gray.800" : "gray.400"}
      py={{ base: 10, md: 20 }}
      borderBottom="1px solid"
      borderBottomColor={colorMode === "light" ? "gray.200" : "gray.700"}
      width="100%"
    >
      <Container
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 10 }}
        textAlign="center"
      >
        <Box mb={8}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            size="md"
            mb={4}
            color="teal.400"
          >
            Languages
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {languages.map((lang) => (
              <Box
                key={lang.language}
                p={5}
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
                bg={colorMode === "light" ? "white" : "gray.800"}
                color={colorMode === "light" ? "gray.800" : "gray.400"}
                transition="0.3s"
                _hover={{
                  boxShadow: "lg",
                  transform: "scale(1.05)", // Scale effect on hover
                  borderColor: "green.600", // Change border color on hover
                }}
                borderBottom="4px solid"
                borderBottomColor="green.500" // Bottom border color
                textAlign="center"
              >
                <Icon
                  as={FontAwesomeIcon}
                  icon={faLanguage}
                  boxSize={8}
                  color="green.500"
                  mb={2}
                />
                <Text fontWeight="bold">{lang.language}</Text>
                <Text
                  fontSize="md"
                  color={colorMode === "light" ? "gray.600" : "gray.400"}
                >
                  Proficiency: {lang.proficiency}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          mb={4}
          color="teal.500"
        >
          Additional Skills
        </Heading>
        <Box position="relative" overflow="hidden" height="150px">
          <motion.div
            style={{
              position: "absolute",
              bottom: "0",
              display: "flex",
              alignItems: "center",
            }}
            initial={{ x: "100%" }} // Start from the right edge of the viewport
            animate={{ x: "-200%" }} // Move to the left until it goes off-screen
            transition={{
              duration: 15, // Increased duration for slower motion
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <Image
              src={carImage}
              alt="Driving Car"
              boxSize={{ base: "120px", md: "200px" }} // Adjusted size for better visibility
              objectFit="contain" // Ensure the entire image fits
              mr={3} // Margin right to space out the text
            />
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color="teal.500"
            >
              Public 1 Car Driving License
            </Text>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default MyAdditionalSkills;
