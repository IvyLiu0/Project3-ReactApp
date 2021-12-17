import { ListGroup, ListGroupItem} from "reactstrap";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";
import {Alldata} from "./data/alldata";


export const Cart = (props) => {
  const cook = props.cookList;
  const dinner = props.dinnerList;
  const flat = props.flatList;
  const gift = props.giftList;
  const totalList = {...cook, ...dinner, ...flat, ...gift}
  const totalvalue = totalList.map((item) => item.value).reduce((acc, curr) => acc + curr, 0)

  return (
    <div className="Lite">
      <h3 className="CartItems">Your cart items</h3>
      {totalvalue > 0 &&
        <div>
            <ListGroup className="Lite">
                {totalList.filter((itemlist) => itemlist.value>0).map((itemlist) => (
                <ListGroupItem key={itemlist.id}>
                <div>
                  <img className="CartImage"
                    src={itemlist.image}
                    alt={itemlist.desc}
                    height="120"
                    width="120"
                  />
                  <h5 className="CartItem">{itemlist.desc} 
                  {" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "}
                  Quantity: {itemlist.value}
                  </h5>
                </div>
              </ListGroupItem>
                ))}
            </ListGroup><br />
            <Link to="/signin">
                <Button className="btn" variant="dark" className="CheckOut">          
                  Check Out
                </Button>
            </Link>
        </div>
      }
      {totalvalue === 0 &&
        <div>
        <h4 className="Contiue">There are 0 items in your cart.</h4>
        <Link to="/">
        <button className="btn btn-success Contiue">Continue Shop</button>
        </Link>
       </div>
      }
    </div>
  );
}



