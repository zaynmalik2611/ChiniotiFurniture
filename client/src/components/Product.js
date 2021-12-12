import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
   return (
      <div className="product">
         <img
            src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="product"
         />
         <div className="product__info">
            <p className="info__name"></p>
            <p className="info__description">
               description description description description description
               description
            </p>
            <p className="info__price">$599.99</p>
            <Link to={`/product/${11}`} className="info__button">
               View
            </Link>
         </div>
      </div>
   );
};

export default Product;
