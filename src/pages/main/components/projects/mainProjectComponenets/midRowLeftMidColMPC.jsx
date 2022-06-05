import '../projectTest.css';
import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web'

const MidRowLeftMidComponent = () => {
    const [MRLMCisHovering, setMRLMCIsHovering] = useState(false);
    const midRowLeftMidColStyles = useSpring({
        config: {mass:5, tension:50, friction:28},
        from: { height: '0%', },
        to: {
            height: MRLMCisHovering ? '100%' : '0%',
        },
    });

    function projectPage() {
        window.location = '/';
        //`/${link}`;
    }

    return (
            <div className='midRowLeftMidColComponent'
                onClick={ () => window.location = '/'}
                onMouseOver={() => setMRLMCIsHovering(true)}
                onMouseLeave={() => setMRLMCIsHovering(false)}>
                 <div className='midRowLeftMidColInitialState' style={{ position: "absolute" }}>
                    <p> Whats here?!</p>
                    <p> Whats here?!</p>
                    <p> Whats here?!</p>
                    <p> Whats here?!</p>
                    <p> Whats here?!</p>
                    <p> Whats here?!</p>
                </div>
                <animated.div style={midRowLeftMidColStyles} className='midRowLeftMidColAnimate'>
                    <div className='midRowLeftMidColInner' style={{ padding: '5%' }}>
                        <p>Peekaboo!</p>
                        <p>Peekaboo!</p>
                        <p>Peekaboo!</p>
                        <p>Peekaboo!</p>
                        <p>Peekaboo!</p>
                    </div>
                </animated.div> 
                <div className='scanning' >
                    Scanning...
                </div>
            </div>
    )
}

export default MidRowLeftMidComponent