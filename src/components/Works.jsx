import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import {  FaSignal, FaBatteryFull } from 'react-icons/fa'; 
import apple from '../images/tab.avif'
import oil from '../images/2136.jpg'
import loan from '../images/57040.jpg'
import ref from '../images/3226221_43166.jpg'
import pmt from '../images/3271200_478489-PGPWBR-73.jpg'
import vms from '../images/396946297_11528323.jpg'
import shop from '../images/4794132_4794132.jpg'
import home from '../images/2458888_332626-P9XZBO-245.jpg'
import StyledStarsCanvas from "../canva/Stars";

const WorkStyles = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: black;
  position: relative;
  
  @media only screen and (max-width: 960px) {
    height: 100vh;
  }

  @media only screen and (max-width: 768px) {
    height: 100vh;
  }

  @media only screen and (max-width: 600px) {
    height: 60vh;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-top: 20px;
  margin-bottom: 30px;
  z-index: 2;
  text-align: center;
  color: white;
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
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 60%;
  max-width: 1200px;
  margin: 0 auto; /* Center horizontally */
  z-index: 2;

  @media (max-width: 960px) {
    width: 90%;
    height: auto; /* Adjust height based on content for smaller screens */
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 600px) {
    width: 100%; /* Full width on very small screens */
    padding: 10px; /* Add some padding for smaller screens */
  }
`;

const PlanetContainer = styled.div`
  width: 75%;
  height: 75%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 35px;
  background: ${({ unlocked }) =>
    unlocked ? "rgba(255, 255, 255, 0.1)" : `url(${apple})`};
  background-size: ${({ unlocked }) => (unlocked ? "none" : "cover")};
  background-position: center;
  border: 3px solid ${({ unlocked }) => (unlocked ? "red" : "red")};

  display: flex; /* Use flexbox for alignment */
  flex-direction: column;
  align-items: center; /* Horizontal centering */
  justify-content: center; /* Vertical centering */

  @media (max-width: 960px) {
    width: 90%;
    height: 60%; /* Reduce height for smaller screens */
    border-radius: 25px;
  }

  .status-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    font-size: 14px;

    @media (max-width: 600px) {
      font-size: 12px; /* Adjust font size on smaller screens */
      padding: 0 5px;
    }
  }

  .current-time {
    font-size: 60px;
    font-weight: bold;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    text-align: center; /* Ensure text is centered */
    color: #f9f4f4; // Darker text for better visibility
    

    @media (max-width: 960px) {
      font-size: 48px; /* Reduce font size for medium screens */
    }

    @media (max-width: 600px) {
      font-size: 36px; /* Further reduce for smaller screens */
    }
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 90%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative; /* For positioning the close button */
  overflow-y: auto; /* Enables vertical scrolling */
  max-height: 100%; /* Prevents the container from growing too large */

  @media (max-width: 768px) {
    height: 100%; /* Allow full height for mobile screens */
    max-height: 100vh; /* Restrict to viewport height */
    overflow-y: scroll; /* Add scrolling for mobile */
  }
`;


const CardRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px; /* Adds consistent gap between cards */

  @media (max-width: 768px) {
    justify-content: center; /* Center cards for smaller screens */
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 23%;
  height: 250px;
  background: linear-gradient(135deg, #ff6a00, #ff8c00);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 45%; /* Adjust card size for tablets */
    height: 250px;
  }

  @media (max-width: 480px) {
    width: 100%; /* Adjust card size for mobile */
    height: auto; /* Let content determine height */
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  padding: 10px;
  color: white;
  text-align: center;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for smaller screens */
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
  padding: 5px;
  color: #333333;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust font size for smaller screens */
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    height: 50%; /* Adjust image height for smaller screens */
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 0, 0, 0.8);
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 0, 0, 1);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
`;


const Works = () => {
  const [unlocked, setUnlocked] = useState(false);
  const scrollRef = useRef(null);

  const projectData = [
    { title: "Oil and Gas Platform", description: "A web app optimizing operations for oil and gas companies.", image: oil },
    { title: "RFP Collaboration Hub", description: "A platform streamlining team collaboration during RFPs.", image: ref },
    { title: "Housing Communication Platform", description: "An intuitive app for managing housing communication seamlessly.", image: home },
    { title: "Loan Processing Application", description: "A web app simplifying loan workflows for faster approvals.", image: loan },
    { title: "Performance Management Tool", description: "A system to track, evaluate, and boost employee performance.", image: pmt },
    { title: "People Survey App", description: "A React Native app designed for quick and insightful surveys.", image: vms },
    { title: "E-commerce Websites", description: "Custom Shopify and WordPress solutions for online stores.", image: shop },
    { title: "E-commerce Websites", description: "Custom Shopify and WordPress solutions for online stores.", image: shop },
  ];


  const handleSwipeGesture = () => setUnlocked(true);
  const handleClose = () => setUnlocked(false);

  useEffect(() => {
    const scrollContent = scrollRef.current;

    const scrollLoop = () => {
      if (scrollContent) {
        if (scrollContent.scrollLeft >= scrollContent.scrollWidth - scrollContent.clientWidth) {
          scrollContent.scrollLeft = 0;
        } else {
          scrollContent.scrollLeft += 1;
        }
      }
    };

    const scrollInterval = requestAnimationFrame(scrollLoop);

    return () => cancelAnimationFrame(scrollInterval);
  }, []);

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // Update time every second
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <WorkStyles>
      <HeroBg>
        <StyledStarsCanvas />
      </HeroBg>
      <Heading>Projects</Heading>
      <Container>
        <PlanetContainer unlocked={unlocked}>
          {!unlocked && (
            <>
              <div className="status-bar">
                <FaSignal />
                <div className="battery-status">
                  
                  <FaBatteryFull color="green" size={30} /> 
                </div>
              </div>
              <div className="current-time" >
                {currentTime}
              </div>
              <div className="swipe-bar" onClick={handleSwipeGesture}>
              <span
    style={{
      cursor: 'pointer',
      color: '#000', // Darker text for better visibility
      fontWeight: 'bold',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Add a slight shadow
      fontSize: '1.1rem', // Slightly larger text for readability
    }}
  >
    ⬅ Click here to unlock screen ➡
  </span>              </div>
            </>
          )}
          {unlocked && (
           <CardsContainer>
           {/* First Row: 4 Cards */}
           <CardRow>
             {projectData.slice(0, 4).map((project, index) => (
               <Card key={index}>
                 <ImageContainer>
                   <CardImage src={project.image} alt={project.title} />
                 </ImageContainer>
                 <Title>{project.title}</Title>
                 <Description>{project.description}</Description>
               </Card>
             ))}
           </CardRow>
         
           {/* Second Row: 4 Cards */}
           <CardRow>
             {projectData.slice(4, 8).map((project, index) => (
               <Card key={index}>
                 <ImageContainer>
                   <CardImage src={project.image} alt={project.title} />
                 </ImageContainer>
                 <Title>{project.title}</Title>
                 <Description>{project.description}</Description>
               </Card>
             ))}
           </CardRow>
         
           <CloseButton onClick={handleClose}>Close</CloseButton>
         </CardsContainer>
         
          )}
        </PlanetContainer>
      </Container>
    </WorkStyles>
  );
};

export default Works;