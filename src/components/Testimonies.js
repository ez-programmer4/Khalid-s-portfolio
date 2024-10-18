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
  slidesToShow: 1, // Default to 1 slide
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024, // For laptops
      settings: {
        slidesToShow: 2, // Show 2 slides on laptops
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // For tablets
      settings: {
        slidesToShow: 1, // Show 1 slide on tablets
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Testimonials() {
  const { colorMode } = useColorMode();

  return (
    <Box
      id="testimonials"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      color={colorMode === "light" ? "gray.800" : "gray.400"}
      py={{ base: 10, md: 20 }} // Responsive padding
      borderBottom="1px solid"
      borderBottomColor={colorMode === "light" ? "gray.200" : "gray.700"}
      overflow="hidden" // Prevent overflow
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
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} // Responsive font sizes
            mb={4}
            color={colorMode === "light" ? "gray.900" : "white"}
          >
            What My Clients Say About My Graphic Design Services
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }} // Responsive font sizes
            mb={8}
            color={colorMode === "light" ? "gray.600" : "gray.400"}
          >
            As a beginner graphic designer, I've had the pleasure of working
            with a variety of clients across different industries. Here's what
            they have to say about my services.
          </Text>
        </Flex>

        <Box overflow="hidden">
          {" "}
          {/* Ensure the slider container has overflow hidden */}
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
                p={6} // Responsive padding
                borderRadius="lg"
                boxShadow="lg"
                textAlign="left"
                width="100%" // Set to 100% to fill the slide
                mx="auto" // Center the cards
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                minWidth={{ base: "100%", md: "300px" }} // Ensure a minimum width for better responsiveness
                flexShrink={0} // Prevent shrinking
                transition="transform 0.3s" // Add transition for hover effect
                _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }} // Hover effect
                my={4} // Add vertical margin for spacing between cards
              >
                <Text
                  fontSize={{ base: "md", md: "lg" }} // Responsive font sizes for quote
                  mb={4}
                  flexGrow={1} // Allow the quote text to grow
                >
                  "{testimonial.quote}"
                </Text>
                <Flex align="center" mt={4}>
                  <Image
                    src={testimonial.profilePhoto}
                    alt={testimonial.name}
                    borderRadius="full"
                    boxSize={{ base: "60px", md: "80px" }} // Responsive image size
                  />
                  <Box ml={4}>
                    <Text
                      fontSize={{ base: "md", md: "lg" }} // Responsive font sizes
                      color={colorMode === "light" ? "gray.900" : "white"}
                    >
                      {testimonial.name}
                    </Text>
                    <Text
                      fontSize={{ base: "sm", md: "md" }} // Responsive font sizes
                      color={colorMode === "light" ? "gray.600" : "gray.500"}
                    >
                      {testimonial.company}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}
