import React, { useContext } from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/footer';
import Toggle from '../../components/toggle/Toggle';
import { ThemeContext } from '../../context';
import Contact from '../../components/contact/Contact';

const ContactPage = () => {
    const theme = useContext(ThemeContext);
    const lightMode = theme.state.lightMode;
    return (
        <div style={{
            backgroundColor: lightMode ? "white" : "#222831",
            color: lightMode ? "black" : "white",
            border: lightMode ? "black" : "white",
        }}>
            <Header />
            <Toggle />
            <Contact />
            <Footer />
        </div>
    )
}

export default ContactPage