import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
  FormLabel,
  FormControl,
  Link,
  useColorMode,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

function Contact() {
  const { colorMode } = useColorMode();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [alertStatus, setAlertStatus] = React.useState({
    isOpen: false,
    type: "",
    message: "",
  });
  const { isOpen, onClose } = useDisclosure();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://backend-khalid-portfolio.onrender.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        if (response.ok) {
          setAlertStatus({
            isOpen: true,
            type: "success",
            message: "Message sent successfully!",
          });
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setAlertStatus({
            isOpen: true,
            type: "error",
            message: "Error sending message.",
          });
        }
      })
      .catch((error) => {
        setAlertStatus({
          isOpen: true,
          type: "error",
          message: error.message,
        });
      });
  }

  return (
    <Box
      id="contact"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      color={colorMode === "light" ? "gray.800" : "gray.400"}
      py={{ base: 10, md: 20 }}
    >
      <Container maxW="container.xl" mx="auto" px={{ base: 4, md: 10 }}>
        <Flex direction={{ base: "column", md: "row" }} align="flex-start">
          <Box flex="1" pr={{ md: 10 }} mb={{ base: 8, md: 0 }}>
            <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} mb={4}>
              Get in Touch
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} mb={8}>
              As a graphic designer, I'm eager to collaborate on innovative
              visual projects. If you have a design concept or need assistance,
              feel free to reach out!
            </Text>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align="center"
              mb={8}
            >
              <Button
                as={Link}
                href="mailto:Khalmohammed37@gmail.com"
                variant="solid"
                colorScheme="green"
                size="lg"
              >
                Email Me
              </Button>
              <Button
                as={Link}
                href="https://www.linkedin.com/in/khalid-kaludi-85b567332/"
                variant="outline"
                colorScheme="gray"
                size="lg"
              >
                Connect on LinkedIn
              </Button>
            </Flex>
          </Box>
          <Box flex="1" pl={{ md: 10 }}>
            <form name="contact" onSubmit={handleSubmit}>
              <FormControl isRequired mb={4}>
                <FormLabel fontSize="lg" mb={2}>
                  Name
                </FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  fontSize="lg"
                />
              </FormControl>
              <FormControl isRequired mb={4}>
                <FormLabel fontSize="lg" mb={2}>
                  Email
                </FormLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  fontSize="lg"
                />
              </FormControl>
              <FormControl isRequired mb={4}>
                <FormLabel fontSize="lg" mb={2}>
                  Message
                </FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  fontSize="lg"
                  rows={5}
                />
              </FormControl>
              <Button
                type="submit"
                variant="solid"
                colorScheme="green"
                size="lg"
                w="full"
              >
                Submit
              </Button>
            </form>
            {alertStatus.isOpen && (
              <Alert status={alertStatus.type} mt={4}>
                <AlertIcon />
                <AlertTitle>
                  {alertStatus.type === "success" ? "Success!" : "Error!"}
                </AlertTitle>
                <AlertDescription>{alertStatus.message}</AlertDescription>
                <CloseButton
                  onClick={onClose}
                  position="absolute"
                  right="8px"
                  top="8px"
                />
              </Alert>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Contact;
