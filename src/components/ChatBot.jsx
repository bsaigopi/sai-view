import React, { useState,useEffect } from "react";
import styled, { keyframes } from "styled-components";
import iphonewallpaper from "../images/phonewall.jpg"
import sicon from "../images/usericons.jpg"
import { FaPaperPlane } from "react-icons/fa";


const wave = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(-10deg); }
  75% { transform: rotate(15deg); }
  100% { transform: rotate(0deg); }
`;

const InnerFrame = styled.div`
  width: 300px;
  height: 620px;
  background-color: rgba(0, 0, 0, 0.7); 
  border-radius: 30px;
  position: relative;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.6);
`;

const Notch = styled.div`
  width: 200px;
  height: 30px;
  background-color: #333;
  border-radius: 0 0 15px 15px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
`;

const WavingHand = styled.div`
  font-size: 3rem;
  animation: ${wave} 1.5s infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FrameWrapper = styled.div`
  width: 320px;
  height: 640px;
  background: url(${iphonewallpaper}) no-repeat center center;
  background-size: cover;
  border-radius: 40px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.2);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TopBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  color: white;
  font-size: 0.8rem;
`;

const Carrier = styled.div`
  font-size: 0.7rem;
  text-align: left; /* Align carrier text to the left */
`;

const Battery = styled.div`
  text-align: left; /* Align battery icon to the left */
`;

const Time = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
  text-align: center; /* Center-align the time */
  /* margin-top: 60px; */
  padding: 40px;
  /* Adjust margin to position the time correctly */
`;

const StartButton = styled.button`
  margin-top: 80px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #ff6a00, #ff8c00);
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const SideButton = styled.div`
  width: 6px;
  height: 50px;
  background: #666;
  position: absolute;
  border-radius: 3px;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);

  ${({ position }) =>
    position === "left" &&
    `
    left: -10px;
    top: 150px;
  `}

  ${({ position }) =>
    position === "right" &&
    `
    right: -10px;
    top: 150px;
  `}
`;

const ChatContainer = styled.div`
  width: 280px;
  height: 580px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ChatMessages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  margin-bottom: 10px;
  padding-top: 40px; /* To ensure chat starts under the notch */
`;

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const CloseButton = styled.button`
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;

  &:hover {
    background: #cc0000;
  }
`;

const ChatMessage = styled.div`
  background-color: ${({ isUser }) => (isUser ? "#007bff" : "#ddd")};
  color: ${({ isUser }) => (isUser ? "white" : "black")};
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
  align-self: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
`;

const ChatInput = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
  outline: none;
`;

const UserIcon = styled.div`
  background-color: #007bff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  left: 10px;
`;


const ChatBot = () => {
  const handleCloseChat = () => {
    setChatStarted(false);
    setMessages([]);
  };
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);

  const predefinedResponses = {
    default: "I'm sorry, I didn't understand that. Can you ask in a different way? or you can reach out to b.saigopi@gmail.com",
    hi: "Hi! How are you doing today?",
    hello: "Hey there! How’s your day going?",
    "how are you": "I'm doing great! Thanks for asking. How about you?",
    "how are you doing": "I'm doing well! What about you?",
    "what is your name": "I'm assistant for SAIGOPI BUDAGM ! How can I assist you today?",
    "what do you do": "SAI is a software developer, specializing in building web and mobile applications.",
    "how is sai": "Sai is doing well! He's a very talented developer.",
    "what does he know": "Sai knows all the technologies, from front-end to back-end and databases. He builds amazing web and mobile applications.",
    "what are Sai strengths and weaknesses": "Sai's strengths include delivering work on time and his dedication, even working late hours when necessary. He doesn’t have many weaknesses, though he sometimes pushes himself too hard.",
    "which company does Sai work for": "Currently, Sai is working for a leading banking company.",
    "how many years Sai is been in US": "I’ve been in the US for almost 6 years now.",
    "how much experience do Sai have": "Sai have extensive experience in software development, particularly in front-end and back-end technologies, and building scalable applications.",
    technologies: "Sai specialize in React, Python, Angular, and working with databases like PostgreSQL and MongoDB.",
    react: "React is a library for building user interfaces, especially for single-page applications.",
    "what projects have you worked on": "Sai have worked on e-commerce platforms, real-time dashboards, and social media apps.",
    trends: "Sai stay updated by following tech blogs, attending webinars, and contributing to open-source projects.",
    "favorite language": "Sai love working with JavaScript because of its versatility and ecosystem.",
    "coding tips": "Sai Always write clean and modular code. Use meaningful variable names and comment your logic.",
    "front-end tools": "Sai recommend tools like Webpack, Babel, and libraries like React and Material-UI for front-end development.",
    "handling bugs": "Sai use a systematic approach: replicate the issue, debug with tools like Chrome DevTools, and write tests to prevent future occurrences.",
    "scalable apps": "Sai Designing scalable apps involves using microservices, caching mechanisms, and efficient database designs.",
    "learning python": "Sai recommend resources like the official Python documentation, freeCodeCamp, and books like 'Automate the Boring Stuff with Python.'",
    email: "If you need further assistance, feel free to reach out at b.saigopi@gmail.com",
};
  

  const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase().trim();
    if (predefinedResponses[lowerCaseMessage]) {
      return predefinedResponses[lowerCaseMessage];
    }
    return predefinedResponses.default;
  };

  const handleUserMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
    setInput("");

    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
      setIsTyping(false);
    }, 2000);
  };
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // Update time every second
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);


  if (!chatStarted) {
    return (
      <FrameWrapper>
        <TopBar>
  <Carrier style={{ textAlign: 'left', flex: 1 }}>Carrier</Carrier>
  <Battery style={{ textAlign: 'right', marginRight: '20px' }}>🔋</Battery>
</TopBar>

        <Time style={{ textAlign: 'center' }}>{time}</Time>
        <WavingHand>
          👋
        </WavingHand>
        <StartButton onClick={() => setChatStarted(true)}>Want to know more about SAI ?</StartButton>
      </FrameWrapper>
    );
  }

  return (
    <FrameWrapper>
      <InnerFrame>
        <Notch />
        <SideButton position="left" />
        <SideButton position="right" />
        <UserIcon>
          <img src={sicon} alt="User" width="40" height="40" />
        </UserIcon>
        <ChatContainer>
            <ChatMessages>
              {messages.length === 0 && (
                <ChatMessage isUser={false}>
                  Hi! I can help you with various things. Try asking about "technologies" or "projects"!
                </ChatMessage>
              )}
              {messages.map((msg, index) => (
                <ChatMessage key={index} isUser={msg.isUser}>
                  {msg.text}
                </ChatMessage>
              ))}
              {isTyping && <ChatMessage isUser={false}>Typing...</ChatMessage>}
            </ChatMessages>
            <form onSubmit={handleUserMessage}>
              <ChatInputContainer>
                <ChatInput
                  type="text"
                  placeholder="Type something..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" style={{ background: "transparent", border: "none", cursor: "pointer" }}>
                  <FaPaperPlane size={20} color="#007bff" />
                </button>
              </ChatInputContainer>
            </form>
            <CloseButton onClick={handleCloseChat}>Close Chat</CloseButton>
          </ChatContainer>
      </InnerFrame>
    </FrameWrapper>
  );
};

export default ChatBot;
