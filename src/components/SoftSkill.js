import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import {
  faTasks,
  faLightbulb,
  faHandshake,
  faComments,
  faBullhorn,
  faHeart,
  faPeopleArrows,
  faCrown,
} from "@fortawesome/free-solid-svg-icons"; // Import icons
import { softSkills } from "../data";

export default function SoftSkill() {
  const { colorMode } = useColorMode();

  return (
    <Box
      minHeight="50vh"
      id="soft-skills"
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
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          mb={4}
          color={colorMode === "light" ? "gray.900" : "white"}
        >
          My Soft Skills
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          mb={8}
          color={colorMode === "light" ? "gray.600" : "gray.400"}
        >
          Here are some of the soft skills I have developed throughout my
          career.
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }} // Display 4 skills per row on large screens
          spacing={8}
        >
          {softSkills.map((skill) => (
            <Box
              key={skill.name}
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              bg={colorMode === "light" ? "white" : "gray.800"} // Card background color
              color={colorMode === "light" ? "gray.800" : "gray.400"} // Text color
              transition="0.3s"
              _hover={{
                boxShadow: "lg",
                transform: "scale(1.05)", // Scale effect on hover
                bg: colorMode === "light" ? "gray.200" : "gray.700", // Background change on hover
              }} // Enhanced hover effect
              borderBottom="4px solid"
              borderBottomColor="green.500" // Bottom border color
              textAlign="center" // Center align the text and icon
            >
              <Icon
                as={FontAwesomeIcon} // Use FontAwesomeIcon
                icon={skill.icon} // FontAwesome icon
                boxSize={8} // Size of the icon
                mb={2} // Margin bottom
                color="green.500" // Icon color
              />
              <Heading fontSize="lg" mb={2}>
                {skill.name}
              </Heading>
              <Text
                fontSize="md"
                color={colorMode === "light" ? "gray.600" : "gray.400"}
              >
                {skill.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
