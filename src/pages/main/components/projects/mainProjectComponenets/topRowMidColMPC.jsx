import '../projectTest.css';
import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import portfolioIcon from '../../../../../components/img/portfolioIcon.png';

const TopRowMidComponent = () => {
    const [TRMCisHovering, setTRMCIsHovering] = useState(false);
    const topRowMidColStyles = useSpring({
        from: { transform: `translateY(-50%)` },
        to: {
          transform: TRMCisHovering ? `translateY(-50%)` : `translateY(0%)`,
        },
    });

    return (
            <div className='topRowMidColComponent'
                onClick={ () => window.location = '/'}
                onMouseOver={() => setTRMCIsHovering(true)}
                onMouseLeave={() => setTRMCIsHovering(false)}>
                <animated.div style={topRowMidColStyles} className='topRowMidColAnimate'>
                    <div className='topRowMidColTopHalf'>
                        <div className='row'>
                            <div className='col-8'>
                                <h1>Portfolio Site</h1>
                            </div>
                            <div className='col-4'>
                                <img src={portfolioIcon} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='topRowMidColBotHalf'>
                        <h2>The very site you are looking at!</h2>
                        <p>- Built using React framework</p>
                        <p>- React libraries such as threejs, jsparticles, and emailjs implemented for quality user experience</p>
                        <a href='https://github.com/cshafizadeh/portfolio-site'>Github Code</a>
                    </div>
                </animated.div>
            </div>
    )
}

export default TopRowMidComponent