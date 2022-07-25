import '../projectTest.css';
import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import donationLogo from '../../../../../components/img/donationLogoWhite.png';

const MidRowLeftComponent = () => {
    const [MRLCisHovering, setMRLCIsHovering] = useState(false);
    const midRowLeftColStyles = useSpring({
        from: { 
            width: '0%',
            height: '0%', 
            marginTop: '50%',
            marginBottom: '50%',
            marginLeft: '50%', 
            marginRight: '50%', 
            borderRadius: '50%',
            border: '0px solid #FF5151'
        },
        to: {
          width: MRLCisHovering ? '100%' : '0%',
          height: MRLCisHovering ? '100%' : '0%',
          marginTop: MRLCisHovering ? '0%' : '50%',
          marginBottom: MRLCisHovering ? '0%' : '50%',
          marginLeft: MRLCisHovering ? '0%' : '50%',
          marginRight: MRLCisHovering ? '0%' : '50%',
          borderRadius: MRLCisHovering ? '0%' : '50%',
          opacity: MRLCisHovering ? 1 : 0,
          border: MRLCisHovering ? '0px solid #139267' : '10px solid #139267'
        },
    });

    return (
            <div className='midRowLeftColComponent'
                onMouseOver={() => setMRLCIsHovering(true)}
                onMouseLeave={() => setMRLCIsHovering(false)}>
                <div className='midRowLeftColInitialState' style={{ position: "absolute", display: 'flex' }}>
                    <img style={{height: '100%'}} src={donationLogo} alt='donationLogo' />
                    <h3 style={{padding: '3%'}}>GSCE</h3>
                </div>
                <animated.div style={midRowLeftColStyles} className='midRowLeftColAnimate'>
                        <p>Built the website for the GSCE, a non-profit trying to stop climate change</p>
                        <p>Site uses EmailJs to handle a contact and grant form, sending the form data to GSCE via email</p>
                        <p>PayPal API implemented to allow for users to donate to the endowment</p>
                        <p onClick={ () => window.location = '/projects'}>Click To See More →</p>
                        <a href='https://gscendowment.org' alt='gscendowment'>Visit →</a>
                </animated.div> 
            </div>
    )
}

export default MidRowLeftComponent