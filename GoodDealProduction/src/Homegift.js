import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import {GiftItems} from "./products/displayProductgiftset";

export const Homegift = (props) => {
  return (
    <div>
      <GiftItems
        giftList={props.giftList}
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
        sortprice3={props.sortprice3}
      />
    </div>
  );
};
