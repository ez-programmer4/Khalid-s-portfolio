import {
  Flex,
  Link,
  Text,
  VStack,
  Icon,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
  FaVk,
  FaTelegram,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon
import { FaTiktok } from "react-icons/fa"; // Import TikTok icon

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
      maxW="1200px"
      mx="auto"
      px={4}
      py={8}
      bg={colorMode === "light" ? "gray.100" : "gray.900"} // Background color changes based on mode
      color={colorMode === "light" ? "gray.800" : "white"} // Text color changes based on mode
      borderTop="5px solid #4CAF50"
    >
      <VStack align="flex-start" spacing={4} mb={{ base: 6, md: 0 }}>
        <Image src="/HEADER.png" alt="My Graphics" w={40} h={40} />
      </VStack>
      <VStack align="flex-start" spacing={4}>
        <Text fontSize="lg" fontWeight="bold">
          Stay connected with me:
        </Text>
        <Flex>
          {[
            {
              icon: FaLinkedin,
              color: "#2867B2",
              link: "https://www.linkedin.com/in/khalid-kaludi-85b567332/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // Updated LinkedIn link
            },

            {
              icon: FaDiscord,
              color: "#7289DA",
              link: "", // Add link if available
            },
            {
              icon: FaTelegram,
              color: "#2867B2",
              link: "https://t.me/binmufo", // Updated Telegram link
            },
            {
              icon: FaInstagram,
              color: "#E4405F",
              link: "https://instagram.com/khalbinbaba", // Instagram link
            },
            {
              icon: FaTiktok,
              color: "#000000",
              link: "https://www.tiktok.com/@binmufo", // TikTok link
            },
            {
              icon: FaVk,
              color: "#45668E",
              link: "", // Add link if available
            },
          ].map(({ icon, color, link }, index) => (
            <Link
              href={link}
              isExternal
              key={index}
              _hover={{ transform: "scale(1.2)", color }}
            >
              <Icon
                as={icon}
                boxSize={6}
                mr={4}
                color={color}
                transition="transform 0.2s"
              />
            </Link>
          ))}
        </Flex>
      </VStack>
      <Text
        fontSize="sm"
        color={colorMode === "light" ? "gray.600" : "gray.400"} // Adjust footer text color based on mode
        textAlign={{ base: "center", md: "right" }}
      >
        &copy; 2024 Khalid Muhammed. All rights reserved.
      </Text>
    </Flex>
  );
};

export default Footer;
