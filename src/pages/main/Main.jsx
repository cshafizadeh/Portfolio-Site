import React, { useContext } from 'react';
import Header from '../../components/header/Header';
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
          backgroundColor: lightMode ? "white" : "#222831",
          color: lightMode ? "black" : "white",
          border: lightMode ? "black" : "white",
      }}>
        <Header />
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

/*
<Header />
<Toggle />
<About />
<Skills />
<ProjectsTest />
<Contact />
<Footer />

*/