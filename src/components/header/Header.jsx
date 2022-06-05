import './header.css'
import RBG from '../img/rgb.gif';
import React from 'react';

const Header = () => {
    const scrollToBottom = () => window.scrollTo ({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    })
    function checkScroll() {
        const pathname = window.location.pathname;
        console.log(pathname);
        if(pathname === '/'){
            scrollToBottom()
        } else {
         window.location = '/contact';
        }
    }
    return (
        <div className='h'>
            <div className="h-middle">
                <div className='middle-content'>
                    <h1>Cyrus Shafizadeh</h1>
                    <h3>Oregon State, Computer Science</h3>
                </div>
            </div>
            <div className="h-right">
                <div className="h-nav">
                    <div className='h-inner-container'>
                        <div className="nav-container">
                            <div className="github">
                                <a href='/'>Home</a>
                            </div>
                        </div>
                        <div className="nav-container">
                            <div className="linkedin">
                                <a href='https://www.linkedin.com/in/cyrus-shafizadeh'>Linkedin</a>
                            </div>
                        </div>
                        <div className="nav-container">
                            <div className="github">
                                <a href='https://www.cyrusshafizadehcs.com'>GitHub</a>
                            </div>
                        </div>
                        <div className="nav-container">
                            <div className="contact">
                                <p onClick={checkScroll}>Contact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rgb">
                <img src={RBG} className='rgb-img' alt=''/>
            </div>
        </div>
    )
}

export default Header