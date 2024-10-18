import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import khalidImage from "../images/IMG_434ui3-01.png"; // Adjust the path as necessary

function About() {
  const { colorMode } = useColorMode();

  return (
    <Box
      id="about"
      color={colorMode === "light" ? "gray.800" : "gray.400"}
      py={10}
      minHeight="85vh"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      borderBottomColor={colorMode === "light" ? "gray.200" : "gray.700"}
      // Make the Box full width
    >
      <Container maxW="none" mx="auto" px={{ base: 4, md: 10 }}>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          wrap="wrap"
        >
          <Box
            flex="1"
            mb={{ base: 6, md: 0 }}
            textAlign={{ base: "center", md: "left" }}
            order={{ base: 2, md: 1 }}
            maxWidth={{ base: "100%", md: "50%" }}
            px={{ base: 4, md: 0 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              mb={4}
            >
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                Hi I am called Khalid Mohammed
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Text
                  as="span"
                  variant="typing"
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                >
                  An Architect, Interior Designer and Graphic Designer
                </Text>
              </motion.div>
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              mb={8}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A highly motivated and creative architectural graduate with a
              strong foundation in design principles, seeking a challenging
              entry-level position in an architectural firm to contribute to
              innovative projects and develop professional skills. As an
              architect, I have learned design through literature review and
              case studies with site analysis to 3D renders, which helped me
              develop visual, creative, and critical skills.
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              mb={8}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              To show up my works I just have attached them below.
            </Text>
            <Flex
              justify={{ base: "center", md: "flex-start" }}
              align="center"
              gap={4}
              flexWrap="wrap"
            >
              <Button
                as={Link}
                href="#contact"
                variant="solid"
                colorScheme="green"
                size={{ base: "sm", md: "md" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Let's build something together
              </Button>
              <Button
                as={Link}
                href="#projects"
                variant="outline"
                colorScheme="gray"
                size={{ base: "sm", md: "md" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Check out my past projects
              </Button>
              <Button
                as={Link}
                href="https://drive.google.com/file/d/1FYoZ8ciGxkDI8ogHb95AySUGQmThruac/view?usp=sharing" // Replace with your actual Google Drive link
                variant="solid"
                colorScheme="blue"
                size={{ base: "sm", md: "md" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                target="_blank"
              >
                Download My CV
              </Button>
            </Flex>
          </Box>
          <Box
            flex="1"
            order={{ base: 1, md: 2 }}
            maxWidth={{ base: "100%", md: "50%" }}
            px={{ base: 4, md: 0 }}

            // Increased margin top for spacing on smaller screens
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <Image
                src={khalidImage}
                objectFit="cover"
                objectPosition="center"
                rounded="lg"
                width="100%"
                maxWidth="500px" // Decreased max width for the image
                mx="auto"
                mb={6}

                // Added margin-bottom for spacing between image and text
              />
            </motion.div>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default About;
