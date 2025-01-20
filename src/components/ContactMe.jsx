import React, { useRef, useState, Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { FaUser, FaEnvelope, FaRegComment } from 'react-icons/fa'; 
import {  OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";
import Rocket from './Modelrocketemail'
import { motion, AnimatePresence } from "framer-motion";
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
  justify-content: center; 
  align-items: center; 
  width: 100%;
  max-width: 1200px;
  z-index: 2;
  padding: 20px;
  gap: 30px;
  height: 100%; 
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 30px;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  height: 65vh;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
  }

  label {
    position: relative;
    display: block;
    width: 100%;
    font-size: 18px;
    color: white;
    text-align: left;
    padding-left: 40px;
  }

  .input-container {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
  }

  input,
  textarea {
    width: 100%;
    padding: 15px 20px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }

  input {
    height: 50px;
  }

  textarea {
    height: 120px;
    resize: vertical;
    padding-left: 40px;
  }

  button {
    background: linear-gradient(135deg, #ff6a00, #ff3a3a);
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    padding: 15px;
    height: 60px;
    border: none;
    border-radius: 8px;
  }

  button:hover {
    background: linear-gradient(135deg, #ff3a3a, #ff6a00);
  }

  .input-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 20px;
  }

  .input-field {
    padding-left: 40px;
  }

  h3 {
    font-family: "Brush Script MT", cursive;
    font-weight: bold;
    font-size: 2.5rem;
    color: white;
    text-align: center;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const RightSection = styled.div`
  flex: 1;
  max-width: 500px;

  canvas {
    width: 100%;
    height: auto;

    @media (max-width: 768px) {
      height: 300px;
    }
  }
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  color: white;
  font-size: 14px;
  position: absolute;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
`;

const ContactMe = () => {

    const [isLaunched, setIsLaunched] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLaunched(true); 

        setTimeout(() => {
            setShowMessage(true);
        }, 2000); 
    };

    const handleReset = () => {
        setIsLaunched(false); 
        setShowMessage(false); 
    };

    return (
        <WorkStyles>
            <HeroBg>
                <StyledStarsCanvas />
            </HeroBg>
            <Heading>Contact Me</Heading>
            <Container>
              <LeftSection>
                <AnimatePresence>
                    {!showMessage ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3>Get in Touch</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="input-container">
                                    <FaUser className="input-icon" />
                                    <input className="input-field" type="text" placeholder="Your Name" required />
                                </div>
                                <div className="input-container">
                                    <FaEnvelope className="input-icon" />
                                    <input className="input-field" type="email" placeholder="Your Email" required />
                                </div>
                                <div className="input-container">
                                    <FaRegComment className="input-icon" />
                                    <textarea placeholder="Your Message" rows="4" required></textarea>
                                </div>
                                <button type="submit">Send Message</button>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="message"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3>🎉 Congratulations!</h3>
                            <p>Your message has been sent successfully.</p>
                            <button onClick={handleReset}>OK</button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </LeftSection>
            <RightSection>
                <AnimatePresence>
                    {!isLaunched && !showMessage && (
                        <motion.div
                            key="rocket"
                            initial={{ x: 0, opacity: 1 }}
                            animate={{ x: isLaunched ? 500 : 0, opacity: isLaunched ? 0 : 1 }}
                            exit={{ x: 500, opacity: 0 }}
                            transition={{ duration: 2 }}
                        >
                            <Canvas style={{ width: "450px", height: "480px" }}>
                                {/* Lights */}
                                <ambientLight intensity={0.9} />
                                <directionalLight position={[5, 5, 5]} intensity={1} />
                                <spotLight position={[5, 5, 5]} angle={5} intensity={1.5} castShadow />

                                {/* Rocket */}
                                <Stage environment="night" intensity={0.5}>
                                    <Rocket />
                                </Stage>

                                {/* Camera */}
                                <PerspectiveCamera position={[250, 100, 1.8]} zoom={0.6} makeDefault />

                                {/* Controls */}
                                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                            </Canvas>
                        </motion.div>
                    )}
                </AnimatePresence>
            </RightSection>
            </Container>
            <Footer>
                <span>© 2025 Made by | Sai Gopi  </span>
            
            </Footer>
        </WorkStyles>
    );
};

export default ContactMe;
