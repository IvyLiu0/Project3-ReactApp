import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'react-slideshow-image/dist/styles.css'

const aboutImages = [
    '/products/aboutImg.jpg',
  ];

const Contact = () => {
    const [name, setName]=useState();
    const [email, setEmail]=useState();
    const [message, setMessage]=useState();
    const nameUpdate=(event)=>{setName(event.target.value)};
    const emailUpdate=(event)=>{setEmail(event.target.value)};
    const messageUpdate=(event)=>{setMessage(event.target.value)};

    const handleSubmit = () => {
        const postURL = "http://localhost:8080/api/contact"
        fetch(postURL, {
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        .then(()=>{
            alert('You have been added to the system!');
        })
    }
    
    return (
        <React.Fragment>
            <br /><br /><br />
                <div>
                    <img className="aboutImg" src={aboutImages} alt="aboutImages"></img>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className="mt-3 mb-5 p-3 bg-white">
                        <label className="m-2">Name:</label><br />
                        <input required onChange={nameUpdate} type="text" name="name" placeholder="Your name"></input><br />
                        <label className="m-2">Email:</label><br />
                        <input required onChange={emailUpdate}  type="email" name="email" placeholder="Your Email"></input><br />
                        <label className="m-2">Message:</label><br />
                        <textarea required onChange={messageUpdate} type="text" name="message" placeholder="Leave your message here..." /><br /><br />
                        <button type="submit">submit</button>
                    </form>
                </div>
        </React.Fragment>
    )
};

export default Contact;