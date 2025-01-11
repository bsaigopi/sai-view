import React from 'react';
import Landing from './components/Landing';
import Skills from './components/Skills';
import Works from './components/Works';
import MySelf from './components/MySelf';
import styled from 'styled-components';
import Awards from './components/Awards';
import ContactMe from './components/ContactMe';

const AppStyles = styled.div`
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;

  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  return (
    <AppStyles>
      <Section id="home">
        <Landing />
      </Section>
      <Section id="about-me">
        <MySelf />
      </Section>
      <Section id="projects">
        <Works />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="awards">
        <Awards />
      </Section>
      <Section id="contact-me">
        <ContactMe />
      </Section>
    </AppStyles>
  );
}

export default App;
