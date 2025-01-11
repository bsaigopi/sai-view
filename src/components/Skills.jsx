import React, { useRef, useState, Suspense } from "react";
import styled from 'styled-components';
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import ChatBot from './ChatBot'
import python from "../images/python-2.png"
import go from "../images/go-1-.png"
import api from "../images/api.png"
import java from "../images/java.svg"
import node from "../images/node-2.png"
import reactnative from "../images/reactnative.png"
import Vue from "../images/vue.png"
import scala from "../images/scalaaa.jpg"
import javascri from "../images/JavaScript-logo.png"
import psql from "../images/psql.png"
import Next from "../images/next.png"
import AWS from "../images/amazon-web-services.png"
import GCP from "../images/gcp.png"
import boot from "../images/boot.jpeg"
import figma from "../images/figma.avif"
import react from "../images/reactt.png"
import Angular from "../images/angular.png"
import Mac from "./Mac"
import { MeshDistortMaterial, OrbitControls, Sphere, Stage, PerspectiveCamera } from "@react-three/drei";



// Canvas with stars animation
const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
`;

const MySelfStyles = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align content to the top */
  background-color: black;
  position: relative;

  @media only screen and (max-width: 768px) {
    height: 200vh;
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
  padding: 20px;
  z-index: 2;
  height: 100%;
  gap: 30px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 10px;
  position: relative; /* Set relative positioning */
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 600px;
  height: 80%;
  overflow: auto; /* Enable scrolling when content overflows */
  
  @media (max-width: 960px) {
    width: 100%; /* Make it full width on smaller screens */
    padding: 15px;
  }
`;


const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    width: 100%; /* Full width on smaller screens */
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around; /* Space tabs evenly */
  align-items: center;
  background: linear-gradient(135deg, #ff6a00, #ff3a3a); /* Gradient applied */
  padding: 10px;
  border-radius: 8px;
`;

const BoxTopSection = styled.div`
  background: rgba(255, 255, 255, 0.1); /* Semi-transparent white */
  color: white;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px; /* Adjusted border-radius */
`;

const Box = styled.div`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1); /* Scaling effect on hover */
    transition: transform 0.3s ease-in-out;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #ff6a00, #ff3a3a);
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  padding: 15px;
  height: 60px;
  border-radius: 10px; /* Adjusted border-radius */

  &:hover {
    background: linear-gradient(135deg, #ff3a3a, #ff6a00);
  }
`;


const Tab = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  color: white;
  transition: background-color 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: rgba(255, 58, 58, 0.8); /* Lighter red on hover */
  }
`;

const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 3 equal columns */
  gap: 10px; /* Space between boxes */
  flex: 1; /* Allow the grid to take remaining space */
`;


const Image = styled.img`
  max-width: 50px; /* Adjust image size */
  max-height: 50px;
`;

const Text = styled.p`
  font-size: 12px; /* Small text */
  margin-top: 5px; /* Space between image and text */
`;



const RotatingImage = styled.img`
  animation: rotate 3s linear infinite; /* Continuous rotation */
  max-width: 100%; /* Ensure image fits within its container */
  max-height: 100%; /* Maintain aspect ratio */

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
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

const Skills = () => {

  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = (box) => {
    setHoveredBox(box);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  return (
    <MySelfStyles>
      <HeroBg>
        <StyledStarsCanvas />
      </HeroBg>
      <Heading>Skills </Heading>
      <Container>

        <LeftSection>
          <BoxTopSection>
            <NavBar>
              <Tab>Full Stack Tech Set</Tab>
            </NavBar>
          </BoxTopSection>

          {/* Grid of Boxes */}
          <BoxGrid>
            <Box
              onMouseEnter={() => handleMouseEnter("web")}
              onMouseLeave={handleMouseLeave}
            >
              <Image src={python} alt="Python Logo" />
              <p>Python</p>
            </Box>
            <Box
              onMouseEnter={() => handleMouseEnter("web")}
              onMouseLeave={handleMouseLeave}
            >
              <Image src={go} alt="Python Logo" />
              <p>Go Lang</p>
            </Box>
            <Box
              onMouseEnter={() => handleMouseEnter("web")}
              onMouseLeave={handleMouseLeave}
            >
              <Image src={java} alt="Python Logo" />
              <p>Java</p>
            </Box>
            <Box
              onMouseEnter={() => handleMouseEnter("web")}
              onMouseLeave={handleMouseLeave}
            >
              <Image src={node} alt="Python Logo" />
              <p>Node</p>
            </Box>
            <Box
              onMouseEnter={() => handleMouseEnter("Mobile")}
              onMouseLeave={handleMouseLeave}
            >
              <Image src={reactnative} alt="Python Logo" />
              <p>React Native</p>
            </Box>
            <Box
              onMouseEnter={() => handleMouseEnter("web")}
              onMouseLeave={handleMouseLeave}
            >
              <Image src={Vue} alt="Python Logo" />
              <p>VUE JS</p>
            </Box>
            <Box
              onMouseEnter={() => handleMouseEnter("web")}
              onMouseLeave={handleMouseLeave}
            >
              <Image src={scala} alt="Python Logo"  />
              <p>Scala</p>
            </Box>
            <Box>
              <Image src={Angular} alt="Python Logo" />
              <p>Angular</p>
            </Box>
            <Box>
              <Image src={AWS} alt="Python Logo" />
              <p>AWS</p>
            </Box>
            <Box>
              <Image src={GCP} alt="Python Logo" />
              <p>GCP</p>
            </Box>
            <Box>
              <Image src={react} alt="Python Logo" />
              <p>React</p>
            </Box>
            <Box>
              <Image src={javascri} alt="Python Logo" />
              <p>Java Script</p>
            </Box>
            <Box>
              <Image src={psql} alt="Python Logo" />
              <p>PostgreSQL</p>
            </Box>
            <Box>
              <Image src={boot} alt="Python Logo" />
              <p>Boot Strap </p>
            </Box>
            <Box>
              <Image src={figma} alt="Python Logo" />
              <p>FIGMA</p>
            </Box>
          </BoxGrid>
        </LeftSection>
        <RightSection>
          {hoveredBox === "Mobile" ? (
          <RotatingImage src={api} alt="Rotated Image" />
          ):(
          <Canvas style={{ width: "450px", height: "480px" }}>
            {/* Lights */}
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <spotLight position={[5, 5, 5]} angle={5} intensity={1.5} castShadow />

            {/* Rocket */}
            <Stage environment="night" intensity={0.5}>
              <Mac />
            </Stage>

            {/* Camera */}
            <PerspectiveCamera position={[100,0,1.8]} zoom={0.8} makeDefault/>

            {/* Controls */}
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
          )}
        </RightSection>
      </Container>
    </MySelfStyles>
  );
};

export default Skills;
