import './error404.css'
import { ThemeContext } from '../../context';
import React, { useContext } from 'react';
import Header from '../../components/header/Header';

const Error404 = () => {
    const theme = useContext(ThemeContext);
    const lightMode = theme.state.lightMode;
  return (
    <div
      style={{
        backgroundColor: lightMode ? "white" : "#222831",
        color: lightMode ? "black" : "white",
        border: lightMode ? "black" : "white",
      }}
    >   
        <Header />
        <div className="e">
            <h1 className="e-title">404</h1>
            <h3>This page does not exist.</h3>
            <a className='e-link' href='https://cyrusshafizadehcs.com'>Main Page</a>
        </div>
    </div>
    )
}

export default Error404