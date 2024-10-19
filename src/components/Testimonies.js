import React from "react";
import Slider from "react-slick"; // Import Slider
import { testimonials } from "../data"; // Adjust the import path for your data
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useColorMode,
  useBreakpointValue,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { ChatIcon } from "@heroicons/react/solid";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Show 1 slide at a time
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export default function Testimonials() {
  const { colorMode } = useColorMode();
  const isMobileOrTablet = useBreakpointValue({ base: true, md: false }); // Determine if mobile or tablet

  return (
    <Box
      id="testimonials"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      color={colorMode === "light" ? "gray.800" : "gray.400"}
      py={{ base: 10, md: 20 }} // Responsive padding
      borderBottom="1px solid"
      borderBottomColor={colorMode === "light" ? "gray.200" : "gray.700"}
      overflow="hidden"
    >
      <Container
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 10 }}
        textAlign="center"
      >
        <Flex justify="center" align="center" mb={8}>
          <ChatIcon className="mx-auto inline-block w-6 h-6 mb-4" />
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            mb={4}
            color={colorMode === "light" ? "gray.900" : "white"}
          >
            What My Clients Say
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            mb={8}
            color={colorMode === "light" ? "gray.600" : "gray.400"}
          >
            I have enjoyed working with a wide range of clients in a variety of
            organisations during my field of work;refer to what they stated.
          </Text>
        </Flex>

        {isMobileOrTablet ? (
          // Render SimpleGrid for mobile and tablet
          <SimpleGrid
            columns={1} // 1 column for mobile and tablet
            spacing={8} // Space between items
          >
            {testimonials.map((testimonial) => (
              <Box
                key={testimonial.name}
                bgGradient={
                  colorMode === "light"
                    ? "linear(to-r, teal.500, teal.300)"
                    : "linear(to-r, teal.800, teal.600)"
                }
                color="white"
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                textAlign="left"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
              >
                <Text fontSize={{ base: "md", md: "lg" }} mb={4} flexGrow={1}>
                  "{testimonial.quote}"
                </Text>
                <Flex align="center" mt={4}>
                  <Image
                    src={testimonial.profilePhoto}
                    alt={testimonial.name}
                    borderRadius="full"
                    boxSize={{ base: "60px", md: "80px" }}
                  />
                  <Box ml={4}>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      color={colorMode === "light" ? "gray.900" : "white"}
                    >
                      {testimonial.name}
                    </Text>
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      color={colorMode === "light" ? "gray.600" : "gray.500"}
                    >
                      {testimonial.company}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        ) : (
          // Render Slider for laptops and larger screens
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <Box
                key={testimonial.name}
                bgGradient={
                  colorMode === "light"
                    ? "linear(to-r, teal.500, teal.300)"
                    : "linear(to-r, teal.800, teal.600)"
                }
                color="white"
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                textAlign="left"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
              >
                <Text fontSize={{ base: "md", md: "lg" }} mb={4} flexGrow={1}>
                  "{testimonial.quote}"
                </Text>
                <Flex align="center" mt={4}>
                  <Image
                    src={testimonial.profilePhoto}
                    alt={testimonial.name}
                    borderRadius="full"
                    boxSize={{ base: "60px", md: "80px" }}
                  />
                  <Box ml={4}>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      color={colorMode === "light" ? "gray.900" : "white"}
                    >
                      {testimonial.name}
                    </Text>
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      color={colorMode === "light" ? "gray.600" : "gray.500"}
                    >
                      {testimonial.company}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Slider>
        )}
      </Container>
    </Box>
  );
}
