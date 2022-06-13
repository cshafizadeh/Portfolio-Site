import '../projectTest.css';
import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import stockImg from '../../../../../components/img/stockChart.png';

const MidRowLeftMidComponent = () => {
    const [MRLMCisHovering, setMRLMCIsHovering] = useState(false);
    const midRowLeftMidColStyles = useSpring({
        config: {mass:5, tension:50, friction:28},
        from: { height: '0%', },
        to: {
            height: MRLMCisHovering ? '100%' : '0%',
        },
    });

    return (
        <div className='midRowLeftMidColComponent'
            onMouseOver={() => setMRLMCIsHovering(true)}
            onMouseLeave={() => setMRLMCIsHovering(false)}>
                <div className='midRowLeftMidColInitialState' style={{ position: "absolute" }}>
                <h1 style={{ textAlign: 'center' }}>Stock API</h1>
                <img src={stockImg} alt='stockImg' style={{width: '100%', height: '70%'}} />
            </div>
            <animated.div style={midRowLeftMidColStyles} className='midRowLeftMidColAnimate'>
                <div className='midRowLeftMidColInner' style={{ padding: '5%' }}>
                    <ul>
                        <li>Uses polygon API</li>
                        <li>Gets stock information of opening, closing, high, and low values for any selected date </li>
                    </ul>
                    <p onClick={ () => window.location = '/stock'}>Click To See More →</p>
                    <a style={{textDecoration: 'underline'}} href="https://github.com/cshafizadeh/ApiProjects/tree/master/src/Components/stocks">GitHub Code</a>
                </div>
            </animated.div> 
            <div className='scanning' >
                Scanning...
            </div>
        </div>
    )
}

export default MidRowLeftMidComponent