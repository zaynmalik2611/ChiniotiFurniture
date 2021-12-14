import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = ({ item, quantityChangeHandler, removeFromCartHandler }) => {
   return (
      <div className="cartitem">
         <div className="cartitem__image">
            <img src={item.imageUrl} alt={item.name} />
         </div>
         <Link to={`/product/${item.product}`} className="cartitem__name">
            <p>{item.name}</p>
         </Link>

         <p className="cartitem__price">${item.price}</p>

         <select
            className="cartitem__select"
            value={item.quantity}
            onChange={(e) =>
               quantityChangeHandler(item.product, e.target.value)
            }
         >
            {[...Array(item.countInStock).keys()].map((x) => (
               <option value={x + 1} key={x + 1}>
                  {x + 1}
               </option>
            ))}
         </select>

         <button
            className="cartitem__deleteBtn"
            onClick={() => removeFromCartHandler(item.product)}
         >
            <i className="fas fa-trash"></i>
         </button>
      </div>
   );
};

export default CartItem;
