import React, { useContext } from 'react';
import Header from '../../components/header/Header';
import Toggle from '../../components/toggle/Toggle';
import Footer from '../../components/footer/footer';
import { projectMainData } from './projectMainData';
import { ThemeContext } from '../../context';
import './projectMain.css';
import ArrowAnimation from '../../components/Animations/figmaAnimation';

const ProjectsMain = () => {
  const theme = useContext(ThemeContext);
  const lightMode = theme.state.lightMode;
  return (
      <div
        style={{
          backgroundColor: lightMode ? "white" : "#222831",
          color: lightMode ? "black" : "white",
          border: lightMode ? "black" : "white",
        }}
      >
      <Header />
      <Toggle />
      <main className='projectMain'>
            {projectMainData.map((data, key) => {
                return (
                    <div className='projectContainer' key={key} style={{ 
                      backgroundImage:`url(${data.background})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundHeight: '75vh',
                  }}>
                      <div className='innerContainer' >
                        <div className='projectTitle'>
                            <h2>{data.title}</h2>
                        </div>
                        <div className='projectDescription'>
                          {projectMainData[key].description.map((description, key) => {
                            return (
                              <li key={key}>{description}</li>
                            )
                          })}
                          <div className='languages row'>
                            {projectMainData[key].languages.map((languages, key) => {
                              return (
                                <div className='language' key={key}>
                                  <div className='languageLogo col-2'>
                                    <img src={languages} alt='logo' />
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                          <a href={data.link}>Visit!</a>
                        </div>
                      </div>
                    </div>
                );
            })}
            </main>
      <Footer />
      </div>
  );
};

export default ProjectsMain;