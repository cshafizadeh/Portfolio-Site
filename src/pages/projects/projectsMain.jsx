import React, { useContext } from 'react';
import NewHeader from '../../components/header/newHeader';
import Toggle from '../../components/toggle/Toggle';
import Footer from '../../components/footer/footer';
import { projectMainData } from './projectMainData';
import { ThemeContext } from '../../context';
import './projectMain.css';

const ProjectsMain = () => {
  const theme = useContext(ThemeContext);
  const lightMode = theme.state.lightMode;

  function checkValid(dataLink) {
    if(dataLink !== ''){
      return (
        <a href={dataLink}>Visit! →</a>
      )
    }
  }

  function dataEmbed(dataEmbed) {
    if(dataEmbed !== ''){
      return (
        <div>
          <iframe
            src={dataEmbed}
            frameBorder="1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />{" "}
        </div>
      );
    }
  }

  return (
      <div
        style={{
          backgroundColor: lightMode ? "white" : "var(--color-primary)",
          color: lightMode ? "black" : "white",
          border: lightMode ? "black" : "white",
        }}
      >
      <NewHeader />
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
                          {dataEmbed(data.embed)}
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
                          {checkValid(data.link)}
                        </div>
                        <a href={data.code}>GitHub Code →</a>
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