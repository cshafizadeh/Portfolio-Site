import './projectTest.css';
import React from 'react';
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-eric.css';
import TopRowMidComponent from './mainProjectComponenets/topRowMidColMPC';
import TopRowRightComponent from './mainProjectComponenets/topRowRightColMPC';
import MidRowLeftComponent from './mainProjectComponenets/midRowLeftColMPC';
import MidRowLeftMidComponent from './mainProjectComponenets/midRowLeftMidColMPC';
import MidRowRightMidComponent from './mainProjectComponenets/midRowRightMidColMPC';
import MidRowRightComponent from './mainProjectComponenets/midRowRightColMPC';

const ProjectsTest = () => {
    function projectPage() {
        window.location = '/projects';
    }
  return (
    <div id='projectsMain'>
         <div className='topRow row'>
            <div className='topRowLeftCol col-3'>
                <h1>PROJECTS </h1>
                <AwesomeButton type="secondary" onClick={projectPage}>See All Projects</AwesomeButton>
            </div>
            <div className='topRowMidCol col-6'> 
                <TopRowMidComponent/>
            </div>
            <div className='topRowRightCol col-3 bg-warning'>
                <TopRowRightComponent />
            </div>
        </div>
        <div className='midRow row'>
            <div className='midRowLeftCol col-3'>
                <MidRowLeftComponent />
            </div>
            <div className='midRowLeftMidCol col-3'>
                <MidRowLeftMidComponent />
            </div>
            <div className='midRowRightMidCol col-3'>
                <MidRowRightMidComponent />
                <p>Beep Boop</p>
            </div>
            <div className='midRowRightCol col-3 bg-white'>
                <MidRowRightComponent/>
            </div> 
        </div>
        <div className='botRow row'>
            <div className='botRowLeftCol col-3 bg-warning'>

            </div>
            <div className='botRowMidCol col-3'>

            </div>
            <div className='botRowRightCol col-6'>

            </div>
        </div>
    </div>
  )
}

export default ProjectsTest