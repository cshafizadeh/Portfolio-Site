import './newheader.css';
//import RBG from '../img/rgb.gif';
import React from 'react';

const NewHeader = () => {
  /*
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
    */
  return (
    <div id="h">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <h2>Cyrus Shafizadeh</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>Oregon State, Computer Science</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-1" style={{ padding: 'none' }}>
          <nav class="navbar navbar-dark">
            <button
              name="navbar-toggler"
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar">
              <div class="navbar-nav">
                <a class="nav-item nav-link" id="home" href="/">
                  Home
                </a>
                <a
                  class="nav-item nav-link"
                  id="linkedln"
                  href="https://www.linkedin.com/in/cyrus-shafizadeh"
                >
                  Linkedin
                </a>
                <a
                  class="nav-item nav-link"
                  id="github"
                  href="https://github.com/cshafizadeh"
                >
                  Github
                </a>
                <a class="nav-item nav-link" id="contact" href="/contact">
                  Contact
                </a>
                <a class="nav-item nav-link" id="projects" href="/projects">
                  Projects
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="header-bottom"></div>
    </div>
  );
};

export default NewHeader;
