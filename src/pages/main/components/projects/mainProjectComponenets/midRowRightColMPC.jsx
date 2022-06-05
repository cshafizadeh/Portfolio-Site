import '../projectTest.css';
import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web'
import BartLogo from '../../../../../components/img/bartLogo.png'

const MidRowRightComponent = () => {
    const [TRLCisHovering, setTRLCIsHovering] = useState(false);
    const topRowLeftColStyles = useSpring({
      from: { transform: `translateX(0%)` },
      to: {
        transform: TRLCisHovering ? `translateX(0%)` : `translateX(100%)`,
      },
    });

  return (
            <div className='midRowRightColComponent'
                onClick={ () => window.location = '/bart'}
                onMouseOver={() => setTRLCIsHovering(true)}
                onMouseLeave={() => setTRLCIsHovering(false)}>
                    <div className='bartBox' style={{ position: "absolute" }}>
                        <img src={BartLogo} alt='bartLogo'/>
                    </div>
                    <animated.div style={topRowLeftColStyles} className='bartAnimation'>
                    <h3>Bart API</h3>
                    <p>Gets info on train arrivals and destinations</p>
                    <p>Click To See More →</p>
                    </animated.div>
            </div>
  )
}

export default MidRowRightComponent