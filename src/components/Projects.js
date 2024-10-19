import React from "react";
import { projects } from "../data";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
  Image,
  useColorMode,
} from "@chakra-ui/react";

export default function Projects() {
  const { colorMode } = useColorMode();

  return (
    <Box
      id="projects"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      color={colorMode === "light" ? "gray.800" : "gray.400"}
      py={{ base: 10, md: 20 }}
      borderBottom="1px solid"
      borderBottomColor={colorMode === "light" ? "gray.200" : "gray.700"}
      // boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
      width="100%"
    >
      <Container
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 10 }}
        textAlign="center"
      >
        <Grid justify="center" align="center" mb={{ base: 6, md: 8 }}>
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            mb={4}
            color={colorMode === "light" ? "gray.900" : "white"}
          >
            My Projects
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            mb={8}
            color={colorMode === "light" ? "gray.600" : "gray.400"}
          >
            I am excited to work on creative projects as a recent graduate,
            whether it be planning, redesigning, rendering, or interior
            designing. From logos to brochures, I have cover.
          </Text>
        </Grid>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={8}
        >
          {projects.map((project) => (
            <GridItem key={project.title}>
              <Box
                bg={colorMode === "light" ? "gray.200" : "gray.800"}
                color={colorMode === "light" ? "gray.600" : "gray.400"}
                p={4}
                borderBottom="4px solid"
                borderBottomColor="green.500"
                borderRadius="lg"
                boxShadow="md"
                h="100%"
                w="100%"
              >
                <Box position="relative" overflow="hidden" borderRadius="lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    w="full" // Full width of the container
                    h={{ base: "150px", md: "200px", lg: "250px" }} // Responsive height
                    minHeight="400px" // Ensure minimum height
                    maxHeight="400px" // Ensure maximum height
                    objectFit="cover"
                    objectPosition="center"
                    borderRadius="lg"
                    // Optionally, add a fixed width for images
                    //width={{ base: "100%", md: "80%", lg: "90%" }} // Example of responsive width
                  />
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    w="full"
                    h="full"
                    bg={colorMode === "light" ? "gray.100" : "gray.900"}
                    opacity="0"
                    transition="opacity 0.3s ease"
                    _hover={{ opacity: 0.8 }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="lg"
                  >
                    <Heading
                      as="h2"
                      fontSize={{ base: "md", md: "lg" }}
                      mb={2}
                      color={colorMode === "light" ? "gray.900" : "white"}
                    >
                      {project.title}
                    </Heading>
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      mb={2}
                      color={colorMode === "light" ? "gray.600" : "gray.400"}
                    >
                      {project.subtitle}
                    </Text>
                    <Link
                      href={project.link}
                      isExternal
                      color={colorMode === "light" ? "green.500" : "green.300"}
                      fontWeight="bold"
                    >
                      View Project
                    </Link>
                  </Box>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
