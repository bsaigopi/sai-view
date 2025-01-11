import React, { useRef, useState, Suspense, useEffect } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import awsdev from '../images/aws-dev.png'
import awspra from '../images/aws-prac.png'

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
`;

const WorkStyles = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    height: auto;
    padding: 20px 0;
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

const MiddleSection = styled.div`
  width: 100%;
  max-width: 800px;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 40px;
  z-index: 2;
  position: relative;
  flex-wrap: wrap;
  gap: 20px;
  text-align: center;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;

  img {
    width: 180px;
    height: 180%; /* Set height to a specific value */
    border-radius: 10px;
    object-fit: cover; /* Ensure the image scales without distortion */
  }

  @media (max-width: 768px) {
    img {
      width: 100px;
      height: 100px; /* Match the width with height for mobile responsiveness */
    }
  }
`;

const BadgeText = styled.p`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
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
          size={0.003}
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

const Awards = () => {
  return (
    <WorkStyles>
      <HeroBg>
        <StyledStarsCanvas />
      </HeroBg>
      <Heading>Awards</Heading>
      <MiddleSection>
        <BadgeContainer>
          <img  style={{height:'100%'}}src={awsdev} alt="Developer Badge" />
          <BadgeText>Developer Badge</BadgeText>
        </BadgeContainer>
        <BadgeContainer>
          <img src={awspra} alt="Practitioner Badge" />
          <BadgeText>Practitioner Badge</BadgeText>
        </BadgeContainer>
        <BadgeContainer>
          <img src={awsdev} alt="Expert Badge" />
          <BadgeText>Expert Badge</BadgeText>
        </BadgeContainer>
      </MiddleSection>
    </WorkStyles>
  );
};

export default Awards;
