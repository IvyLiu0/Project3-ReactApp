import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { Items } from "./products/displayProductcookware";
import { Items1 } from "./products/displayProductdinnerware";
import { Items2 } from "./products/displayProductflatware";
import { Items3 } from "./products/displayProductgiftset";

export const Home = (props) => {
  return (
    <div>
      <Items
        itemList={props.itemList}
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
        sortprice={props.sortprice}
      />
      <Items1
        itemList1={props.itemList1}
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
        sortprice={props.sortprice}
      />
      <Items2
        itemList2={props.itemList2}
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
        sortprice={props.sortprice}
      />
      <Items3
        itemList3={props.itemList3}
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
        sortprice={props.sortprice}
      />
    </div>
  );
};

export default Home;