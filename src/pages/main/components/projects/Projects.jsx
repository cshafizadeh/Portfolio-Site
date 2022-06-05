import './projects.css';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { projectData } from './projectData';

const Projects = () => {
    function projectPage() {
        console.log('ok')
        window.location = '/projects';
    }
    useEffect(() => {
        Aos.init({duration: 3000 });
    }, []);
  return (
    <div className="p">
        <div className='p-top row'>
            <div className="p-title col-md-3">Projects</div>
            <div className="p-container col-md-9">
                {projectData.map((data, key) => {
                    return (
                        <div data-aos="fade-left" className="projectPosts" key={key}>
                            <div className='post'>
                                <div className="post-container">
                                    <div className="post-top row">
                                        <p className='col-5'>{data.title}</p>
                                        <div className="post-photo-container col-5">
                                            <img src={data.logo} alt='' className='post-photo'/>
                                        </div>
                                    </div>
                                    <div className="post-bottom">
                                        <div className="post-description">
                                            <ul>
                                                {projectData[key].description.map((description, key) => {
                                                    return (
                                                    <li key={key}>{description}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <div className="post-links">
                                            <a href='https://github.com/cshafizadeh/Weather-App'>Link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='allProjects' onClick={projectPage}>

        </div>
    </div>
  )
}

export default Projects