import { Container, Text, VStack, Box, Input, Button, HStack, Avatar, Flex, Spacer } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">WhatsApp-like Chat App</Text>
        <Box borderWidth="1px" borderRadius="lg" width="100%" height="60vh" overflowY="scroll" p={4}>
          {messages.map((msg, index) => (
            <HStack key={index} spacing={3} align="start">
              <Avatar name={msg.sender} />
              <Box bg="gray.100" p={3} borderRadius="md">
                <Text fontWeight="bold">{msg.sender}</Text>
                <Text>{msg.text}</Text>
              </Box>
            </HStack>
          ))}
        </Box>
        <Flex width="100%" mt={4}>
          <Input
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <Spacer />
          <Button onClick={handleSend} colorScheme="blue" ml={2}>
            Send
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;