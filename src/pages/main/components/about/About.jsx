import React from 'react';
import './about.css';
import { Particlesjs } from '../../../../components/tsParticles/Particles';
import image from '../../../../components/img/computerBackground.png';

const About = () => {
  return (
    <div
      id="i"
      style={{
        backgroundImage: `url(${image})`,
        backgroundHeight: '75vw',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Particlesjs />
      <div className="i-left">
        <div className="i-left-container">
          <h2>Hello my name is</h2>
          <h1 className="i-name"> &lt;Cyrus Shafizadeh /&gt; </h1>
          <div className="i-title">
            <div className="i-title-container">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Designer</div>
              <div className="i-title-item">Programmer</div>
              <div className="i-title-item">Business Minor</div>
            </div>
          </div>
          <div className="i-desc">
            I am a 3rd-year student at the College of Engineering at Oregon
            State University currently achieving my Bachelors of Science in
            computer science and a minor in business. My passion is creating
            unique stylish user experiences that achieve business objectives
            while scaling and delighting users. I am on a non-stop mission to
            find an internship in the San Fransisco Bay Area this summer.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

//           <Particlesjs/>
