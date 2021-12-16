import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { CookItems } from "./products/displayProductcookware";

export const Homecook = (props) => {
  return (
    <div>
      <CookItems
        cookList={props.cookList}
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
        sortprice={props.sortprice}
      />
    </div>
  );
};
