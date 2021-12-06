import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'react-slideshow-image/dist/styles.css'

const aboutImages = [
    '/products/aboutImg.jpg',
  ];

const Contact = () => {
    return (
        <React.Fragment>
            <div>
            <br /><br /><br />
                <div>
                    <img className="aboutImg" src={aboutImages} alt="aboutImages"></img>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Contact;