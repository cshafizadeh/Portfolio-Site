import '../projectTest.css';
import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import databaseVideo from './databaseVideo.js';

const TopRowRightComponent = () => {
    const [TRRCisHovering, setTRRCIsHovering] = useState(false);

    const topRowRightColInitialStyles = useSpring({
        from: { opacity: 1 },
        to: {
            opactiy: TRRCisHovering ? 0 : 1,
        },
    })

    const topRowRightColStyles = useSpring({
        from: { opacity: 1 },
        to: {
          opacity: TRRCisHovering ? 1 : 0,
        },
    });
    
    return (
            <div className='topRowRightColComponent'
                onMouseOver={() => setTRRCIsHovering(true)}
                onMouseLeave={() => setTRRCIsHovering(false)}>
                <animated.div className='topRowRightColInitialState' style={topRowRightColInitialStyles}>
                    <h1>E-Commerce Database</h1>
                </animated.div>
                <animated.div style={topRowRightColStyles} className='topRowRightColAnimate'>
                    <p>- E-commerce database that keeps tracks of customers, orders, and items</p>
                    <p>- Add, search, update, and delete functionality</p>
                    <p>- Built using handlebars, nodejs, and MySQL</p>
                    <div className='databaseVideo' style={{ width: '90%', height: '60%', margin: 'auto' }} >
                        {databaseVideo()}
                    </div>
                </animated.div>
            </div>
    )
}

export default TopRowRightComponent