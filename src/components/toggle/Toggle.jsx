import React from 'react';
import './toggle.css'
import Sun from '../../components/img/light_mode.png'
import Moon from '../../components/img/dark_mode.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context.js';

const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className="t">
            <img src={Sun} alt='' className='t-icon'/>
            <img src={Moon} alt='' className='t-icon'/>
            <div className="t-button" onClick={handleClick} style={{left: theme.state.lightMode ? 25 : 0}}>

            </div>
        </div>
    )
}

export default Toggle;