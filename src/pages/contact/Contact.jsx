import React, { useContext } from 'react'
import NewHeader from '../../components/header/newHeader';
import Footer from '../../components/footer/footer';
import Toggle from '../../components/toggle/Toggle';
import { ThemeContext } from '../../context';
import Contact from '../../components/contact/Contact';

const ContactPage = () => {
    const theme = useContext(ThemeContext);
    const lightMode = theme.state.lightMode;
    return (
        <div style={{
            backgroundColor: lightMode ? "white" : "var(--color-primary)",
            color: lightMode ? "black" : "white",
            border: lightMode ? "black" : "white",
        }}>
            <NewHeader />
            <Toggle />
            <Contact />
            <Footer />
        </div>
    )
}

export default ContactPage