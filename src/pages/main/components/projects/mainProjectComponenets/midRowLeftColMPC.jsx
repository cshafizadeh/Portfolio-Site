import '../projectTest.css';
import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web'

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
          border: MRLCisHovering ? '0px solid #FF5151' : '10px solid #FF5151'
        },
    });

    return (
            <div className='midRowLeftColComponent'
                onMouseOver={() => setMRLCIsHovering(true)}
                onMouseLeave={() => setMRLCIsHovering(false)}>
                <div className='midRowLeftColInitialState' style={{ position: "absolute" }}>
                    <p> Whats here?!</p>
                </div>
                    <animated.div style={midRowLeftColStyles} className='midRowLeftColAnimate'>
                            <p>Peekaboo!</p>
                    </animated.div> 
            </div>
    )
}

export default MidRowLeftComponent