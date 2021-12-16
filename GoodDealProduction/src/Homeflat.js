import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import {FlatItems} from "./products/displayProductflatware";

export const Homeflat = (props) => {
  return (
    <div>
      <FlatItems
        flatList={props.flatList}
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
        sortprice2={props.sortprice2}
      />
    </div>
  );
};
