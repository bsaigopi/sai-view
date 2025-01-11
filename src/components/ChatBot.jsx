import React, { useState,useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaPaperPlane } from "react-icons/fa"; // Import an icon from react-icons
import iphonewallpaper from "../images/phonewall.jpg"
import sicon from "../images/usericons.jpg"
import { color } from "framer-motion";

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
  background-color: rgba(0, 0, 0, 0.7); /* Transparent background with dark overlay */
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

const Signal = styled.div`
  text-align: left; /* Align signal icon to the left */
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
  gap: 10px;
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
    default: "I'm sorry, I didn't understand that. Can you ask in a different way?",
    technologies: "I specialize in React, Python, and Angular.",
    react: "React is a library for building user interfaces, especially for single-page applications.",
    "what projects you worked on?": "I've worked on e-commerce platforms, chat applications, and real-time dashboards.",
    trends: "I stay updated by following tech blogs, attending webinars, and contributing to open-source projects.",
    "favorite language": "I love working with JavaScript because of its versatility and ecosystem.",
    "coding tips": "Always write clean and modular code. Use meaningful variable names and comment your logic.",
    "front-end tools": "I recommend tools like Webpack, Babel, and libraries like React and Material-UI for front-end development.",
    "handle bugs": "I use a systematic approach: replicate the issue, debug with tools like Chrome DevTools, and write tests to prevent future occurrences.",
    "scalable apps": "Designing scalable apps involves using microservices, caching mechanisms, and efficient database designs.",
    "learning python": "I recommend resources like the official Python documentation, freeCodeCamp, and books like 'Automate the Boring Stuff with Python.'",
    email: "You can reach me at example@example.com.",
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
            {/* Initial suggested message */}
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
              <button type="submit" style={{ display: "none" }}>
                Send
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
