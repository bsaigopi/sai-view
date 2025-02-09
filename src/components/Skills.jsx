import React, { useRef, useState, Suspense } from "react";
import styled from 'styled-components';
import { Canvas, useFrame } from "@react-three/fiber";
import python from "../images/python-2.png"
import azure from "../images/azuree.png"
import shopify from "../images/shopifyff.jpeg"
import wordpress from "../images/wordpress.jpg"
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
import github  from "../images/github.png"
import docker from "../images/dockerr.webp"
import mysql from "../images/mysql.png"
import splunk from "../images/splun.png"
import mongo from "../images/mongo.png"
import newrelic from "../images/new.png"
import postman from "../images/postamn.png"
import swagger from "../images/swagger.png"
import Angular from "../images/angular.png"
import Mac from "./Mac"
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";
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
    height: 200vh;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-top: 20px; 
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
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 600px;
  height: 80%;
  
  @media (max-width: 960px) {
    width: 100%;
    padding: 15px;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

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
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  flex-shrink: 0; /* Prevents shrinking */
`;

const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); /* Auto-adjust grid columns */
  gap: 10px;
  max-height: 550px;
  overflow-y: auto; /* Vertical scrolling for the grid */
  padding-right: 5px;
`;

const Box = styled.div`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* Space between image and text */
  height: 100px; /* Adjust height to fit content */
  text-align: center;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  p {
    margin: 10px 0 0; /* Space above text */
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    overflow-wrap: break-word; /* Ensure text wraps within box */
    max-width: 100%; /* Prevent text overflow */
  }
`;

const Image = styled.img`
  max-width: 60px; /* Set image size */
  max-height: 60px;
  margin-bottom: 10px; /* Add space between image and text */
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
              <Tab>MY SKILL SET</Tab>
            </NavBar>
          </BoxTopSection>
          <BoxGrid>
            <Box
              onMouseEnter={() => handleMouseEnter("web")}
              onMouseLeave={handleMouseLeave}
            >
              <Image src={python} alt="Python Logo" />
              <p>Python</p>
            </Box>
            <Box>
              <Image src={Angular} alt="Python Logo" />
              <p>Angular</p>
            </Box>
            <Box
              onMouseEnter={() => handleMouseEnter("web")}
              onMouseLeave={handleMouseLeave}
            >
              <Image src={go} alt="Python Logo" style={{ height: '70px', width: '70px' }} />
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
              onMouseEnter={() => handleMouseEnter("Mobile")}
              onMouseLeave={handleMouseLeave}
            >
              <Image src={reactnative} alt="Python Logo" style={{ height: '100px', width: '100px' }} />
              <p>React Native</p>
            </Box>
            <Box
              onMouseEnter={() => handleMouseEnter("web")}
              onMouseLeave={handleMouseLeave}
            >
              <Image src={Vue} alt="Python Logo" />
              <p>VUE JS</p>
            </Box>
            <Box>
              <Image src={react} alt="Python Logo" />
              <p>React</p>
            </Box>

            <Box>
              <Image src={AWS} alt="Python Logo" />
              <p>AWS</p>
            </Box>

            <Box>
              <Image src={azure} alt="Python Logo" />
              <p>Azure</p>
            </Box>
            <Box
              onMouseEnter={() => handleMouseEnter("web")}
              onMouseLeave={handleMouseLeave}
            >
              <Image src={node} alt="Python Logo" style={{ height: '50px', width: '80px' }} />
              <p>Node JS</p>
            </Box>

            <Box>
              <Image src={javascri} alt="Python Logo" />
              <p>Java Script</p>
            </Box>
            <Box
              onMouseEnter={() => handleMouseEnter("web")}
              onMouseLeave={handleMouseLeave}
            >
              <Image src={scala} alt="Python Logo" style={{ height: '100px', width: '100px' }} />
              <p>Scala</p>
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

            <Box>
              <Image src={postman} alt="Python Logo" />
              <p>Postman </p>
            </Box>
            <Box>
              <Image src={GCP} alt="Python Logo" />
              <p>GCP</p>
            </Box>
            <Box>
              <Image src={shopify} alt="Python Logo" />
              <p>Shopify </p>
            </Box>
            <Box>
              <Image src={mysql} alt="Python Logo" />
              <p>My Sql </p>
            </Box>
            <Box>
              <Image src={github} alt="Python Logo" />
              <p>Github </p>
            </Box>
            <Box>
              <Image src={splunk} alt="Python Logo" />
              <p>Splunk </p>
            </Box>
            <Box>
              <Image src={newrelic} alt="Python Logo" />
              <p>New Relic </p>
            </Box>
            <Box>
              <Image src={mongo} alt="Python Logo" />
              <p>Mongo DB </p>
            </Box>

            <Box>
              <Image src={swagger} alt="Python Logo" />
              <p>Swagger </p>
            </Box>

           
            <Box>
              <Image src={docker} alt="Python Logo" />
              <p>Docker </p>
            </Box>
            <Box>
              <Image src={wordpress} alt="Python Logo" />
              <p>Wordpress </p>
            </Box>
          </BoxGrid>
        </LeftSection>
        <RightSection>
          {hoveredBox === "Mobile" ? (
            <RotatingImage src={api} alt="Rotated Image" />
          ) : (
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
              <PerspectiveCamera position={[100, 0, 1.8]} zoom={0.8} makeDefault />

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
