import { Container, Text, VStack, Box, Input, Button, HStack, Avatar, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Chat App</Text>
        <Box width="100%" height="60vh" borderWidth="1px" borderRadius="lg" overflowY="scroll" p={4}>
          {messages.map((message, index) => (
            <HStack key={index} spacing={3} mb={3} alignSelf={message.sender === "You" ? "flex-end" : "flex-start"}>
              {message.sender !== "You" && <Avatar name={message.sender} />}
              <Box bg={message.sender === "You" ? "blue.100" : "gray.100"} p={3} borderRadius="md">
                <Text>{message.text}</Text>
              </Box>
              {message.sender === "You" && <Avatar name={message.sender} />}
            </HStack>
          ))}
        </Box>
        <Flex width="100%">
          <Input
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <Button onClick={handleSend} ml={2}>
            Send
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;