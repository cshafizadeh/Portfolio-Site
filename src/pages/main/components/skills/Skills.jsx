import React, { useContext, useEffect } from 'react';
import { skillData } from './skillData.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './skills.css';
import { ThemeContext } from '../../../../context.js';


const Skills = () => {
    const theme = useContext(ThemeContext);
    const lightMode = theme.state.lightMode;
    function randomize() {
        console.log('here')
        document.getElementById('s-left-wrapper').style.color = randomColors();
      }
      // http://www.paulirish.com/2009/random-hex-color-code-snippets/
      
    function randomColors() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    useEffect(() => {
        Aos.init({duration: 5000 });
    }, []);
    return (
        <div className="s">
            <div className="s-left">
                <div id="s-left-wrapper" style={{backgroundColor: lightMode ? "lightblue" : "#343F56"}}>
                    <div className='click'>Click Us! ↓</div>
                    <div id="s-container" onClick={randomize}>
                        <div className="cpp">
                            <p>C++</p>
                        </div>
                    </div>
                    <div id="s-container" onClick={randomize}>
                        <div className="js">
                            <p>Javascript</p>
                        </div>
                    </div>
                    <div id="s-container" onClick={randomize}>
                        <div className="react">
                            <p>React</p>
                        </div>
                    </div>
                    <div id="s-container" onClick={randomize}>
                        <div className="cs">
                            <p>C</p>
                        </div>
                    </div>
                    <div id="s-container" onClick={randomize}>
                        <div className="html">
                            <p>HTML</p>
                        </div>
                    </div>
                    <div id="s-container" onClick={randomize}>
                        <div className="css">
                            <p>CSS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className="s-right">
                <div className="s-right-wrapper">
                    <div className="title">
                        <h2>Skills</h2>
                    </div>
                    <div className="s-paragraph">
                        <p>As a developer working towards a cs degree, I am constantly looking to expand my skills
                            and broaden my horizons. So far, I have learned:</p>
                            <div className='languages'>
                                {skillData.map((data, key) => {
                                    return (
                                        <div className='language-logo' key={key}>
                                            <div className='logo-container'>
                                                <img src={data.logo} alt='js' />
                                            </div>
                                            <div className='language-name'>
                                                <p>{data.name}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills