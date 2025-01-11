import React, { useRef, useState, Suspense, useEffect } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { FaWifi, FaSignal, FaBatteryFull } from 'react-icons/fa'; // Using react-icons for common icons
import apple from '../images/tab.avif'
import { Work } from "@mui/icons-material";
import oil from '../images/2136.jpg' 
import loan from '../images/57040.jpg'
import ref from '../images/3226221_43166.jpg'
import pmt from '../images/3271200_478489-PGPWBR-73.jpg'
import vms from '../images/396946297_11528323.jpg'
import shop from '../images/4794132_4794132.jpg'
import home from '../images/2458888_332626-P9XZBO-245.jpg'

// Canvas wrapper for stars animation
const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
`;

const WorkStyles = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: black;
  position: relative;

  @media only screen and (max-width: 768px) {
    height: 200vh;
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
  justify-content: center;  /* Center horizontally */
  align-items: center;      /* Center vertically */
  width: 75%;
  height: 60%;
  max-width: 1200px;
  margin: 0 auto;           /* Ensure it remains centered even on larger screens */
  z-index: 2;

  @media (max-width: 960px) {
    width: 90%;             /* Make the container wider on smaller screens */
    height: auto;           /* Allow height to adjust based on content */
    flex-direction: column; 
    align-items: center;
  }
`;

const PlanetContainer = styled.div`
  width: 75%;
  height: 75%;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the container */
  z-index: 2;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 35px;
  background: ${({ unlocked }) =>
    unlocked ? "rgba(255, 255, 255, 0.1)" : `url(${apple})`};
  background-size: ${({ unlocked }) => (unlocked ? "none" : "cover")};
  background-position: center;
  border: 3px solid ${({ unlocked }) => (unlocked ? "red" : "red")}; /* Black border when locked, dark gray when unlocked */


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
  }

  .battery-status {
    display: flex;
    align-items: center;
    gap: 5px; /* Space between 4G and battery */
    font-size: 15px; 
  }

  .time-display {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 36px;
    font-weight: bold;
    color: white;
  }

  .swipe-bar {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 40px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: white;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }
  
  .current-time {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top:10%;
    transform: translate(-50%, -50%);
    font-size: 60px; /* Make the time bigger */
    font-weight: bold; /* Bold text */
    color: #fff; /* White color for better contrast */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; /* iOS-like font */
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* Subtle shadow for better visibility */
  }

  .close-button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
  }
  
  .scroll-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 60%;
    overflow-x: auto;  
    overflow-y: hidden;  
    white-space: nowrap;  
    padding: 20px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
  }

  .scroll-content > div {
    display: inline-block;    
    margin-right: 20px;  
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
  padding: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  margin-bottom: 20px; /* Space between rows */
  flex-wrap: wrap; /* Allows cards to wrap within the row */
  gap: 20px; /* Adds consistent gap between cards */
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 23%;
  height: 300px;
  background: linear-gradient(135deg, #ff6a00, #ff8c00); /* Softer gradient using warm shades */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  height: 10%;
  padding: 10px;
  color: white; /* White text for contrast */
  text-align: center;
  font-weight: 600;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
  height: 30%;
  overflow: hidden;
  padding: 5px;
  color: #333333; /* Dark gray text for readability */
  text-overflow: ellipsis;
  line-height: 1.4;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 60%; /* 60% of the card height */
  overflow: hidden;
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the container proportionally */
  transition: transform 0.3s ease;
  ${Card}:hover & {
    transform: scale(1.05); /* Zoom effect on hover */
  }
`;

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StyledStarsCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};


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
                    5G
        <FaBatteryFull color="green" size={30}/> {/* Green Battery Icon */}
      </div>
                  </div>
                  <div className="current-time">
              {currentTime}
            </div>
                  <div className="swipe-bar" onClick={handleSwipeGesture}>
                    Swipe Up to Unlock
                  </div>
                </>
              )}
             {unlocked && (
   <CardsContainer>
   {/* Row 1: 4 Cards */}
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

   {/* Row 2: 3 Cards */}
   <CardRow>
     {projectData.slice(4, 7).map((project, index) => (
       <Card key={index}>
         <ImageContainer>
           <CardImage src={project.image} alt={project.title} />
         </ImageContainer>
         <Title>{project.title}</Title>
         <Description>{project.description}</Description>
       </Card>
     ))}
   </CardRow>

   <div className="close-button" onClick={handleClose}>
     Close
   </div>
 </CardsContainer>
)}
            </PlanetContainer>
      </Container>
    </WorkStyles>
  );
};

export default Works;







