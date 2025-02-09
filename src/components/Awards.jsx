import React from "react";
import styled from "styled-components";
import awsdev from "../images/aws-dev.png";
import awspra from "../images/aws-prac.png";
import StyledStarsCanvas from "../canva/Stars";

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
`;

const WorkStyles = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: flex-start; /* Align children from the top */
  background-color: black;
  position: relative;
  overflow: hidden;
  padding-top: 20px; /* Add padding to top */

  @media only screen and (max-width: 768px) {
    height: auto;
    padding: 20px 0;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 30px;
  z-index: 2;
  text-align: center;
  color: white;
`;

const MiddleSection = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  text-align: center;
  z-index: 2;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px; 
  box-sizing: border-box; 
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 400px;
    height: 400px;
    border-radius: 10px;
    object-fit: cover;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      width: 140px;
      height: 140px;
    }

    @media (max-width: 480px) {
      width: 100px;
      height: 100px;
    }
  }
`;

const BadgeText = styled.p`
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Awards = () => {
  return (
    <WorkStyles>
      <HeroBg>
        <StyledStarsCanvas />
      </HeroBg>
      <Heading>Certification's</Heading>
      <MiddleSection>
        <BadgeContainer>
          <a href="https://www.credly.com/badges/d3a9ce6b-33f2-4b3e-8bfb-177b6f4f1072/linked_in_profile" target="_blank" rel="noopener noreferrer">
          <img src={awsdev} alt="Developer Badge" /></a>
          <BadgeText>Developer Badge</BadgeText>
        </BadgeContainer>
        <BadgeContainer>
        <a href="https://www.credly.com/badges/31fa074a-02e8-45b4-909b-e469b0e40709/linked_in_profile" target="_blank" rel="noopener noreferrer">
          <img src={awspra} alt="Practitioner Badge" /></a>
          <BadgeText>Practitioner Badge</BadgeText>
        </BadgeContainer>
      </MiddleSection>
    </WorkStyles>
  );
};

export default Awards;
