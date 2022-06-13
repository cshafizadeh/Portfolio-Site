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
            <div className='topRowLeftCol col-md-3'>
                <h1>PROJECTS </h1>
                <AwesomeButton type="secondary" onPress={() => {projectPage()}}>See All Projects</AwesomeButton>
                <p style={{padding: '10%'}}>Hover over a project to see details</p>
            </div>
            <div className='topRowMidCol col-md-6'> 
                <TopRowMidComponent/>
            </div>
            <div className='topRowRightCol col-md-3 bg-warning'>
                <TopRowRightComponent />
            </div>
        </div>
        <div className='midRow row'>
            <div className='midRowLeftCol col-md-3'>
                <MidRowLeftComponent />
            </div>
            <div className='midRowLeftMidCol col-md-3'>
                <MidRowLeftMidComponent />
            </div>
            <div className='midRowRightMidCol col-md-3'>
                <MidRowRightMidComponent />
                <p>Beep Boop</p>
            </div>
            <div className='midRowRightCol col-md-3 bg-white'>
                <MidRowRightComponent/>
            </div> 
        </div>
        <div className='botRow row'>
            <div className='botRowLeftCol col-md-3 bg-warning'>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
            </div>
            <div className='botRowMidCol col-md-3'>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
            </div>
            <div className='botRowRightCol col-md-6'>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectsTest