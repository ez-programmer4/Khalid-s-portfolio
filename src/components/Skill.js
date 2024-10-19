import React from "react";
import { skills } from "../data"; // Ensure this includes the icon and image data
import {
  Box,
  Container,
  Heading,
  Text,
  useColorMode,
  SimpleGrid,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

export default function Skills() {
  const { colorMode } = useColorMode();

  return (
    <Box
      minHeight="50vh"
      id="skills"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      color={colorMode === "light" ? "gray.800" : "gray.400"}
      py={{ base: 10, md: 20 }} // Responsive padding
      borderBottom="1px solid"
      borderBottomColor={colorMode === "light" ? "gray.200" : "gray.700"}
      boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
    >
      <Container
        maxW="96.9vw"
        px={{ base: 4, md: 10, sm: 0 }} // Responsive padding
        textAlign="center"
        mx="auto"
      >
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "4xl" }} // Responsive font sizes
          mb={4}
          color={colorMode === "light" ? "gray.900" : "white"}
        >
          Software Skills
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "lg" }} // Responsive font sizes
          mb={8}
          color={colorMode === "light" ? "gray.600" : "gray.400"}
        >
          I have acquired a range of software skills which enables me to
          visualize, illustrate, and design with an appealing render from site
          analysis to 3D renders I have got covered.
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 3 }} // Responsive grid columns
          spacing={4}
        >
          {skills.map((skill) => (
            <Box
              key={skill.name}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box position="relative">
                <CircularProgress
                  value={skill.percentage} // Use the percentage for circular progress
                  color="green.500" // Bright green color
                  size="120px" // Size of the circular progress
                  thickness="8px" // Thickness of the circular progress
                >
                  <CircularProgressLabel fontSize="lg" fontWeight="bold">
                    {skill.percentage}%
                  </CircularProgressLabel>
                </CircularProgress>
                <Box
                  as="img"
                  src={skill.image} // Use the image property instead of icon
                  alt={skill.name}
                  boxSize="40px" // Adjust size as needed
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)" // Center the image
                />
              </Box>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="bold"
                mt={2}
              >
                {skill.name}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
