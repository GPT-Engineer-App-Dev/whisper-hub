import { Container, Text, VStack, Box, Input, Button, HStack, Avatar, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">WhatsApp-like Chat App</Text>
        <Box borderWidth="1px" borderRadius="lg" width="100%" height="60vh" overflowY="scroll" p={4}>
          {messages.map((message, index) => (
            <HStack key={index} spacing={3} align="start" mb={3}>
              <Avatar name={message.sender} />
              <Box>
                <Text fontWeight="bold">{message.sender}</Text>
                <Text>{message.text}</Text>
              </Box>
            </HStack>
          ))}
        </Box>
        <Flex width="100%">
          <Input
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />
          <Button onClick={sendMessage} ml={2}>Send</Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;