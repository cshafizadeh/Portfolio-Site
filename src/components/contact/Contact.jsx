import './contact.css';
import Gmail from '../../components/img/Gmail_icon.png'
import Phone from '../../components/img/phone_logo.png'
import GitHub from '../../components/img/githubLogo.png'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import {AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial, } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [user_name, setName] = useState('');
    const [name_placeholder, setNameHolder] = useState('Name (First / Last)');
    const [user_email, setEmail] = useState('');
    const [email_placeholder, setEmailHolder] = useState('Email');
    const [user_subject, setSubject] = useState('');
    const [subject_placeholder, setSubjectHolder] = useState('Subject');
    const [user_message, setMessage] = useState('');
    const [message_placeholder, setMessageHolder] = useState('Message');

    const nameChange = (e) => {
        setName(e.target.value);
        setNameHolder(e.target.value);
    }

    const emailChange = (e) => {
        setEmail(e.target.value);
        setEmailHolder(e.target.value);
    }

    const subjectChange = (e) => {
        setSubject(e.target.value);
        setSubjectHolder(e.target.value);
    }

    const messageChange = (e) => {
        setMessage(e.target.value);
        setMessageHolder(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user_name !== "" && user_email !== "" && user_subject !== "" && user_message !== ""){

            emailjs.sendForm('service_cya2abe', 'template_m7mszdx', formRef.current, 'U-dYJh2Dumb1yaGDj')
            .then((result) => {
                console.log(result.text)
                setDone(true)
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                    setNameHolder('Name (First / Last)');
                    setEmailHolder('Email');
                    setSubjectHolder('Subject');
                    setMessageHolder('Message');
            }, (error) => {
            console.log(error.text)
            });
        }
        else {  
            if(user_name === ""){
                setNameHolder('Please Enter This Field (Name)')
            }
            if(user_email === "") {
                setEmailHolder('Please Enter This Field (Email)')
            }
            if(user_subject === ""){
                setSubjectHolder('Please Enter This Field (Subject)')
            }
            if(user_message === ""){
                setMessageHolder('Please Enter This Field (Message)')
            }
            setDone(false)
        }
    };
    return (
        <div className='c'>
            <div className="c-container">
                <div className="c-left">
                    <h1 className="c-title">Contact Me!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Gmail} className='c-icon' alt=''/>
                            <div className='email'>cshafizadeh@gmail.com</div>
                        </div>
                        <div className="c-info-item">
                            <img src={Phone} className='c-icon' alt=''/>
                            <div className="phone">+1 (925) 448 0288</div>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-description">
                        <b>Reach Out!</b> Always looking for opportunities to grow.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type='text' placeholder={name_placeholder} name='user_name' value={user_name} onChange={nameChange}/>
                        <input type='text' placeholder={email_placeholder} name='user_email' value={user_email} onChange={emailChange}/>
                        <input type='text' placeholder={subject_placeholder} name='user_subject' value={user_subject} onChange={subjectChange}/>
                        <textarea rows='5' placeholder={message_placeholder} name='message' value={user_message} onChange={messageChange}/>
                        <AwesomeButton type="secondary">Submit</AwesomeButton>
                        <div className="sent-message">
                            {done && "Sent! Thank you." }
                        </div>
                    </form>
                </div>
            </div>
    </div>
    )
}

export default Contact