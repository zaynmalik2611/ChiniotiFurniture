import './CartScreen.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import CartItem from '../components/CartItem';

// Importing Actions

import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartScreen = () => {
   const dispatch = useDispatch();

   const cart = useSelector((state) => state.cart);
   const { cartItems } = cart;

   const quantityChangeHandler = (id, quantity) => {
      dispatch(addToCart(id, quantity));
   };

   const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id));
   };

   const getCartCount = () => {
      return cartItems.reduce(
         (quantity, item) => Number(item.quantity) + quantity,
         0
      );
   };

   const getCartSubTotal = () => {
      return cartItems.reduce(
         (price, item) => item.price * item.quantity + price,
         0
      );
   };

   return (
      <div className="cartscreen">
         <div className="cartscreen__left">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
               <div>
                  Your cart is empty <Link to="/">Go Back</Link>
               </div>
            ) : (
               cartItems.map((item) => (
                  <CartItem
                     key={item.product}
                     item={item}
                     quantityChangeHandler={quantityChangeHandler}
                     removeFromCartHandler={removeFromCartHandler}
                  />
               ))
            )}
         </div>
         <div className="cartscreen__right">
            <div className="cartscreen__info">
               <p>Subtotal ({getCartCount()}) items</p>
               <p>$({getCartSubTotal().toFixed(2)})</p>
            </div>
            <div>
               <button>Proceed To Checkout</button>
            </div>
         </div>
      </div>
   );
};

export default CartScreen;
