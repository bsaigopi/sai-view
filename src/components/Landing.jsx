import React, { Suspense } from "react";
import styled from "styled-components";
import HeaderSection from "./HeaderSection";
import Typewriter from "typewriter-effect";
import { Bio } from "../data/constants";
import StarCanvas from "../canva/Stars";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import rb from "../images/herooooo.png";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  padding: 0;
  gap: 20px; /* Add space between Left and Right sections */
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px; /* Increase gap for smaller screens */
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  text-align: left; /* Center the text for smaller screens */
  
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 54px;
  margin-bottom: -1%;
  @media only screen and (max-width: 768px) {
    font-size: 40px; /* Make the title smaller on mobile */
  }
`;

const Role = styled.div`
  font-size: 28px;
  color: #ff6a00;
  @media only screen and (max-width: 768px) {
    font-size: 22px; /* Adjust role size on mobile */
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #ff6a00, #ff3a3a);
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 640px;
  height: 530px;
  border-radius: 100%; /* Make the image round */
  object-fit: cover;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

const Landing = () => {
  return (
    <Section>
      <HeaderSection />
      <HeroBg>
        <StarCanvas />
      </HeroBg>
      <Container>
        <Left>
          <Title>
            Hi, I am <br /> {Bio.name}
          </Title>
          <Role>
            I am
            <Typewriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </Role>
          <SubTitle>{Bio.description}</SubTitle>
          <Button>Resume</Button>
        </Left>
        <Right>
          <Img src={rb} />
        </Right>
      </Container>
    </Section>
  );
};

export default Landing;
