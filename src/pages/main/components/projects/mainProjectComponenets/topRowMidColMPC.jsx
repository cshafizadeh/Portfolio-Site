import '../projectTest.css';
import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web'

const TopRowMidComponent = () => {
    const [TRMCisHovering, setTRMCIsHovering] = useState(false);
    const topRowMidColStyles = useSpring({
        from: { transform: `translateY(-50%)` },
        to: {
          transform: TRMCisHovering ? `translateY(-50%)` : `translateY(0%)`,
        },
    });

    function projectPage() {
        window.location = '/';
        //`/${link}`;
    }

    return (
            <div className='topRowMidColComponent'
                onClick={ () => window.location = '/'}
                onMouseOver={() => setTRMCIsHovering(true)}
                onMouseLeave={() => setTRMCIsHovering(false)}>
                <animated.div style={topRowMidColStyles} className='topRowMidColAnimate'>
                    <div className='topRowMidColTopHalf'>
                        <p> Whats here?!</p>
                    </div>
                    <div className='topRowMidColBotHalf'>
                        <p>Peekaboo!</p>
                    </div>
                </animated.div>
            </div>
    )
}

export default TopRowMidComponent