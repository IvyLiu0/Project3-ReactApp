import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import 'react-slideshow-image/dist/styles.css';
// import { Dinnerware } from "./data/dinnerware";
// import {Cookware} from "./data/cookware";
// import {Flatware} from "./data/flatware";
// import {Giftset} from "./data/giftset";
import {Card, Button, CardGroup} from "react-bootstrap";
import {Link} from "react-router-dom"
// import { Alldata } from "./data/alldata";

const productImages = [
    '/products/8.jpg',
    '/products/12.jpg',
    '/products/15.jpg',
    '/products/4.jpg'
  ];

 export const AllProducts = () => {
    
    return (
        <React.Fragment>
        <br /><br />
        <div className="CardProduct">
        <CardGroup className="productCard">
            <Card style={{marginBottom:"20px"}} className="Card">
                <Card.Img variant="top" src={productImages[0]} />
                <Card.Body>
                <Card.Title>Cookware</Card.Title>
                </Card.Body>
                <Button variant="dark"><Link to="/cookware" className="productButton">Products</Link></Button>
            </Card>
            <Card style={{marginLeft:"20px", marginBottom:"20px"}} className="Card">
                <Card.Img variant="top" src={productImages[1]} />
                <Card.Body>
                <Card.Title>Dinnerware</Card.Title>
                </Card.Body>
                <Button variant="dark" ><Link to="/dinnerware" className="productButton">Products</Link></Button>
            </Card>
        </CardGroup>

        <CardGroup className="productCard">
            <Card className="Card">
                <Card.Img variant="top" src={productImages[2]} />
                <Card.Body>
                <Card.Title>Flateware</Card.Title>
                </Card.Body>
                <Button variant="dark" ><Link to="/flatware" className="productButton">Products</Link></Button>
            </Card >
            <Card style={{marginLeft:"20px"}} className="Card">
                <Card.Img variant="top" src={productImages[3]} />
                <Card.Body>
                <Card.Title>Gift Set</Card.Title>
                </Card.Body>
                <Button variant="dark" ><Link to="/giftset" className="productButton">Products</Link></Button>
            </Card>
            </CardGroup>
        </div>
    </React.Fragment>
    );
  }

