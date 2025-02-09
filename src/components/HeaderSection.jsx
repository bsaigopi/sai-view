import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const highlightAnimation = keyframes`
  0%, 100% {
    color: #ff3a3a;
  }
  50% {
    color: #ffda4e;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  background: transparent;
  padding: 5px 0;
  position: relative;
  z-index: 2;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    background-color: #333;
    padding: 10px;
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 1;
    border-radius: 5px;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  font-size: 18px;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff3a3a;
    color: #fff;
  }
`;

const UserName = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: "Arial, sans-serif";
  animation: ${highlightAnimation} 3s infinite;
  color: white;
  display: flex;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: white;
  }
`;

const NavBar = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  z-index: 5;
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #ff6347;
  color: white;
  border-radius: 50%;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  z-index: 9999; 
  
  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const scrollToTop = () => {
    console.log("Scroll to top clicked!"); // Debug log
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <>
      <NavBar>
        <Section>
          <Container>
            <Links>
              <UserName>Budagam Sai Gopi</UserName>
              <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div></div>
                <div></div>
                <div></div>
              </Hamburger>
            </Links>
            <List isOpen={isMenuOpen}>
              <ListItem onClick={() => scrollToSection("home")}>Home</ListItem>
              <ListItem onClick={() => scrollToSection("about-me")}>About Me</ListItem>
              <ListItem onClick={() => scrollToSection("projects")}>Projects</ListItem>
              <ListItem onClick={() => scrollToSection("skills")}>Skills</ListItem>
              <ListItem onClick={() => scrollToSection("awards")}>Certification's</ListItem>
              <ListItem onClick={() => scrollToSection("contact-me")}>Contact Me</ListItem>
            </List>
          </Container>
        </Section>
      </NavBar>

      {/* Scroll-to-top button */}
      <ScrollToTopButton onClick={scrollToTop}>↑</ScrollToTopButton>
    </>
  );
};

export default HeaderSection;
