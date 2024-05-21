import { Container, VStack, Box, Input, Button, Text, HStack, Avatar } from "@chakra-ui/react";
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
        <Box width="100%" height="60vh" borderWidth="1px" borderRadius="lg" overflowY="scroll" p={4}>
          {messages.map((message, index) => (
            <HStack key={index} spacing={3} alignItems="flex-start" mb={3}>
              <Avatar name={message.sender} />
              <Box>
                <Text fontWeight="bold">{message.sender}</Text>
                <Text>{message.text}</Text>
              </Box>
            </HStack>
          ))}
        </Box>
        <HStack width="100%">
          <Input
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <Button onClick={handleSend} colorScheme="blue">
            Send
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;