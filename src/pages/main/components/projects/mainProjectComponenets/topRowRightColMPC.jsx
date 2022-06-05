import '../projectTest.css';
import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web'

const TopRowRightComponent = () => {
    const [TRRCisHovering, setTRRCIsHovering] = useState(false);
    const topRowRightColStyles = useSpring({
        from: { opacity: 1 },
        to: {
          opacity: TRRCisHovering ? 1 : 0,
        },
    });
    
    return (
            <div className='topRowRightColComponent'
                onClick={ () => window.location = '/'}
                onMouseOver={() => setTRRCIsHovering(true)}
                onMouseLeave={() => setTRRCIsHovering(false)}>
                <div className='topRowRightColInitialState' style={{ position: "absolute" }}>
                    <p> Whats here?!</p>
                </div>
                <animated.div style={topRowRightColStyles} className='topRowRightColAnimate'>
                    <p>Peekaboo!</p>
                </animated.div>
            </div>
    )
}

export default TopRowRightComponent