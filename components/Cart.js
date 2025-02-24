import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
const cartItems =useSelector((store)=>store.cart.items);

const dispatch = useDispatch();

const handleClearCart = () => {
  dispatch(clearCart());
}

    return (
      <div className="cart">
        <h1>Cart</h1>
        <button className="clearbtn" onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length==0 && (
          <h1>Cart is empty. Add Items to the cart</h1>
        )}
        <div>
          <ItemList items={cartItems}/>
        </div>
      </div>
    );
  };
  export default Cart;