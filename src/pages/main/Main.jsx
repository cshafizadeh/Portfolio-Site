import React, { useContext } from 'react';
import NewHeader from '../../components/header/newHeader';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from '../../components/contact/Contact';
import Toggle from '../../components/toggle/Toggle';
import ProjectsTest from './components/projects/projectTest';
import Footer from '../../components/footer/footer';
import { ThemeContext } from '../../context';


const Main = () => {
  const theme = useContext(ThemeContext);
  const lightMode = theme.state.lightMode;
  return (
      <div style={{
          backgroundColor: lightMode ? "white" : "var(--color-primary)",
          color: lightMode ? "black" : "white",
          border: lightMode ? "black" : "white",
      }}>
        <NewHeader />
        <Toggle />
        <About />
        <Skills />
        <ProjectsTest />
        <Contact />
        <Footer />
      </div>
  );
};

export default Main;