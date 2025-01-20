import React from "react";
import styled from 'styled-components';
import ChatBot from './ChatBot'
import StyledStarsCanvas from "../canva/Stars"; 

const MySelfStyles = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align content to the top */
  background-color: black;
  position: relative;
  @media only screen and (max-width: 960px) {
    height: 200vh;
  }

  @media only screen and (max-width: 768px) {
    height: 100%;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-top: 20px; /* Space from the top */
  margin-bottom: 30px; /* Add gap below the heading */
  z-index: 2; /* Ensure it's above the background */
  text-align: center;
  color: white; /* Ensure visibility on a dark background */
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 20px; /* Consistent padding around the container */
  z-index: 2; /* Ensure above background */

  @media (max-width: 960px) {
    flex-direction: column; /* Stack sections for smaller screens */
    align-items: center;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 500px; /* Limit the width for better alignment */
`;

const RightSection = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 500px; /* Limit the width for better alignment */
`;
const WhatidoText = styled.p`
  font-size: 1.0rem; /* Slightly larger font size for readability */
  font-family: 'Arial', sans-serif; /* Clean, modern sans-serif font */
  color: white; /* Dark gray for better readability */
  line-height: 1.5; /* Improve line spacing */
  margin: 10px 0; /* Space around the text */
  white-space: pre-line; /* Automatically handle line breaks from the text */
  max-width: 90%; /* Limit the text width for better readability */
`;



const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 20px; /* Space between boxes */
  justify-content: center; /* Center grid items horizontally */
  align-items: start; /* Align grid items vertically */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack boxes vertically for smaller screens */
  }
`;
const Box = styled.div`
  background: linear-gradient(135deg, #ff6a00, #ff3a3a); /* Gradient from orange to red */
  padding: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center; /* Center Icon and Text vertically */
  color: white; /* White text for good contrast */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Icon = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 55%;
  background-color: #fdddd8; /* Tomato red for a vibrant contrast */
  display: flex;
  color: black;
  font-weight: bold;
  align-items: center; /* Center icon content vertically */
  justify-content: center; /* Center icon content horizontally */
  margin-right: 15px; /* Space between Icon and Text */
`;

const BoxText = styled.p`
  font-size: 1rem;
  margin: 0; /* Remove default margins */
  font-weight: 500; /* Slightly bold for better readability */
  line-height: 1; /* Ensure proper line-height */
`;

const MySelf = () => {
  return (
    <MySelfStyles>
      <HeroBg>
        <StyledStarsCanvas />
      </HeroBg>
      <Heading>About Me</Heading>
      <Container>
        <LeftSection>
          <Heading></Heading>
          <ChatBot />
        </LeftSection>

        <RightSection>
          <Heading>What I Do</Heading>
          <WhatidoText>
    ⚡ Build dynamic frontends with React & Angular, and powerful backends using Django, Node.js, and Java Spring Boot.
    {"\n"}🔧 Develop & deploy RESTful APIs for seamless data exchange.
    {"\n"}📊 Implement logging & monitoring systems for efficient tracking and analysis.
    {"\n"}🚀 Focused on creating scalable, high-performance solutions.
    {/* {"\n"}🔗 Expertise in API architecture, backend development, and web design.
    {"\n"}💡 Passionate about delivering innovative digital experiences. */}
  </WhatidoText>
          <BoxContainer>
            <Box>
              <Icon>API</Icon>
              <BoxText>API Development</BoxText>
            </Box>
            <Box>
              <Icon>WEB</Icon>
              <BoxText>Web Development</BoxText>
            </Box>
            <Box>
              <Icon>Mobile</Icon>
              <BoxText>Mobile Development</BoxText>
            </Box>
            <Box>
              <Icon>Cloud</Icon>
              <BoxText>Cloud Integration</BoxText>
            </Box>
            <Box>
              <Icon>QA</Icon>
              <BoxText>Quality control</BoxText>
            </Box>
            <Box>
              <Icon>UI</Icon>
              <BoxText>UI/UX Design</BoxText>
            </Box>
          </BoxContainer>
        </RightSection>
      </Container>
    </MySelfStyles>
  );
};

export default MySelf;
