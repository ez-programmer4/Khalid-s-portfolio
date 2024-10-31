import React from "react";
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
import { certificates } from "../data"; // Adjust the path as necessary

export default function Certificates() {
  const { colorMode } = useColorMode();

  return (
    <Box
      id="certificates"
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
          as="h1"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          mb={4}
          color={colorMode === "light" ? "gray.900" : "white"}
        >
          My Certificates
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          mb={8}
          color={colorMode === "light" ? "gray.600" : "gray.400"}
        >
          Here are some of the certificates I have earned.
        </Text>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={8}
        >
          {certificates.map((certificate) => (
            <GridItem key={certificate.title}>
              <Box
                bg={colorMode === "light" ? "gray.200" : "gray.800"}
                color={colorMode === "light" ? "gray.600" : "gray.400"}
                p={4}
                borderBottom="4px solid"
                borderBottomColor="green.500" // Changed from blue.500 to green.500
                borderRadius="lg"
                boxShadow="md"
                h="100%"
                w="100%"
                position="relative"
              >
                <Link href={certificate.link} isExternal>
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={{ base: "100%", md: "100%", lg: "100%" }} // Set width to full
                    height={{ base: "150px", md: "200px", lg: "250px" }} // Set height based on screen size
                    objectFit="cover"
                    borderRadius="lg"
                  />
                  <Heading
                    as="h2"
                    fontSize={{ base: "md", md: "lg" }}
                    mt={2}
                    color={colorMode === "light" ? "gray.900" : "white"}
                  >
                    {certificate.title}
                  </Heading>
                </Link>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
