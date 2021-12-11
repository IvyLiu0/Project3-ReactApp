import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'react-slideshow-image/dist/styles.css';
import {Card, Button, CardGroup} from "react-bootstrap";
import {Link} from "react-router-dom"

const productImages = [
    '/products/8.jpg',
    '/products/12.jpg',
    '/products/15.jpg',
    '/products/4.jpg'
  ];

const AllProducts = () => {
    return (
        // <Row xs={1} md={2} className="g-4">
        //     {Array.from({ length: 4 }).map((_, idx) => (
        //         <Col>
        //         <Card>
        //             <Card.Img variant="top" src={productImages[0]} />
        //             <Card.Body>
        //             <Card.Title>Card title</Card.Title>
        //             <Card.Text>
        //                 This is a longer card with supporting text below as a natural
        //                 lead-in to additional content. This content is a little bit longer.
        //             </Card.Text>
        //             </Card.Body>
        //         </Card>
        //         </Col>
        //     ))}
        // </Row>
        
        <React.Fragment>
            <br /><br />
            <div className="CardProduct">
            <CardGroup className="productCard">
                <Card style={{marginBottom:"20px"}} className="Card">
                    <Card.Img variant="top" src={productImages[0]} />
                    <Card.Body>
                    <Card.Title>Dinnerware</Card.Title>
                    </Card.Body>
                    <Button variant="dark"><Link to="/product" className="productButton">Products</Link></Button>
                </Card>
                <Card style={{marginLeft:"20px", marginBottom:"20px"}} className="Card">
                    <Card.Img variant="top" src={productImages[1]} />
                    <Card.Body>
                    <Card.Title>Cookware</Card.Title>
                    </Card.Body>
                    <Button variant="dark"><Link to="/product" className="productButton">Products</Link></Button>
                </Card>
            </CardGroup>

            <CardGroup className="productCard">
                <Card className="Card">
                    <Card.Img variant="top" src={productImages[2]} />
                    <Card.Body>
                    <Card.Title>Flateware</Card.Title>
                    </Card.Body>
                    <Button variant="dark"><Link to="/product" className="productButton">Products</Link></Button>
                </Card >
                <Card style={{marginLeft:"20px"}} className="Card">
                    <Card.Img variant="top" src={productImages[3]} />
                    <Card.Body>
                    <Card.Title>Gift Set</Card.Title>
                    </Card.Body>
                    <Button variant="dark"><Link to="/product" className="productButton">Products</Link></Button>
                </Card>
                </CardGroup>
            </div>
        </React.Fragment>
    )
};

export default AllProducts;