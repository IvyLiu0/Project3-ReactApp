import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { DinnerItems } from "./products/displayProductdinnerware";

export const Homedinner = (props) => {
  return (
    <div>
      <DinnerItems
        dinnerList={props.dinnerList}
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
        sortprice1={props.sortprice1}
      />
    </div>
  );
};
