import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import 'react-slideshow-image/dist/styles.css'

const aboutImages = [
    '/products/aboutImg.jpg',
  ];

const About = () => {
    return (
        <React.Fragment>
            <div>
            <br /><br /><br />
                <div>
                    <img className="aboutImg" src={aboutImages} alt="aboutImages"></img>
                </div>
                <div>
                <br /><br />
                <p className="aboutDes">
                    Good Deal Production Enterprises, which also operates under the name Good Deal Productions, is located in Chino, California. 
                    This organization primarily operates in the Dishes, Commercial or Household: ceramic dinnerwares, cookwares, and housewares.
                <br /><br />
                    Good Deal Production Enterprises, Inc was founded in 1996. This organization has been operating for approximately 24 years. 
                    Good Deal Production Enterprises employs approximately 10 people at this single location. This organization is engaged in manufacturing and importing activities at this facility.
                </p>
                </div>
            </div>
        </React.Fragment>
    )
};

export default About;