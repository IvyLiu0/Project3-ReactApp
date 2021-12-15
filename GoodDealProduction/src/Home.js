import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { Items } from "./displayProducts";

export const Home = (props) => {
  return (
    <div>
      <Items
        itemList={props.itemList}
        // itemList1={props.itemList1}
        // itemList2={props.itemList2}
        // itemList3={props.itemList3}
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
        sortprice={props.sortprice}
      />
    </div>
  );
};

export default Home;