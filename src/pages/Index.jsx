import { Box, Button, Container, Heading, Text, Input, Textarea, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={bgColor}>
          <Heading fontSize="xl" textAlign="center">
            Quick Contact Form Integration
          </Heading>
          <Text mt={4} textAlign="center" color={textColor}>
            Add a contact form to your site in minutes with our easy-to-use API.
          </Text>
          <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwZm9ybSUyMHdlYnNpdGV8ZW58MHx8fHwxNzEzNzc4MzM4fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" mt={4} />
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={bgColor}>
          <Heading fontSize="xl" textAlign="center">
            Try It Out!
          </Heading>
          <Text mt={4} textAlign="center" color={textColor}>
            Fill out the form below and see how easy it is to integrate with your website.
          </Text>
          <VStack spacing={4} mt={4}>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" type="email" />
            <Textarea placeholder="Your Message" />
            <Button rightIcon={<FaPaperPlane />} colorScheme="blue">
              Send Message
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
