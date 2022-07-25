import React from "react";
import './footer.css';
import GitHub from '../img/githubLogo.png';
import linkedlnLogo from '../img/linkedinLogo.png';
import instagramLogo from '../img/instagramLogo.png';

export default function Footer() {
    return (
        <div>
            <div id='footer'>
                <div className="footer-container">
                    <div className="row" style={{padding: '10px'}}>
                        <div className='col'>
                            <a href='https://github.com/cshafizadeh' alt=''><img className='footer-img' src={GitHub} alt=''/></a>
                            <a href='https://www.linkedin.com/in/cyrus-shafizadeh' alt=''><img className='footer-img' src={linkedlnLogo} alt=''/></a>
                            <a href='https://www.instagram.com/cshfzdh/' alt=''><img className='footer-img' src={instagramLogo} alt=''/></a>
                        </div>
                    </div>
                    <p style={{marginBottom: '0'}}>Copyright © 2022 Cyrus Shafizadeh</p>
                </div>
            </div>
        </div>
        
    );
};