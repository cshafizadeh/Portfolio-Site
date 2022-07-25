import './error404.css'
import { ThemeContext } from '../../context';
import React, { useContext } from 'react';
import NewHeader from '../../components/header/newHeader';
import Footer from '../../components/footer/footer';

const Error404 = () => {
    const theme = useContext(ThemeContext);
    const lightMode = theme.state.lightMode;
  return (
    <div
      style={{
        backgroundColor: lightMode ? "white" : "var(--color-primary)",
        color: lightMode ? "black" : "white",
        border: lightMode ? "black" : "white",
      }}
    >   
        <NewHeader />
        <div className="e">
            <h1 className="e-title">404</h1>
            <h3>This page does not exist.</h3>
            <a className='e-link' href='https://cyrusshafizadehcs.com'>Main Page</a>
        </div>
        <Footer />
    </div>
    )
}

export default Error404