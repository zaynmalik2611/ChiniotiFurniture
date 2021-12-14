import './ProductScreen.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

// Importing Actions

import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductScreen = () => {
   const [quantity, setQuantity] = useState(1);
   const dispatch = useDispatch();

   const productDetails = useSelector((state) => state.getProductDetails);
   const { loading, error, product } = productDetails;

   const params = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      if (product && params.id !== product._id) {
         dispatch(getProductDetails(params.id));
      }
   }, [dispatch, product, params]);

   const addToCartHandler = () => {
      dispatch(addToCart(product._id, quantity));
      navigate('/cart');
   };

   return (
      <div className="productscreen">
         {loading ? (
            <h2>Loading...</h2>
         ) : error ? (
            <h2>error</h2>
         ) : (
            <>
               <div className="productscreen__left">
                  <div className="left__image">
                     <img src={product.imageUrl} alt={product.name} />
                  </div>
                  <div className="left__info">
                     <p className="left__name">{product.name}</p>
                     <p>{product.price}</p>
                     <p>{product.description}</p>
                  </div>
               </div>
               <div className="productscreen__right">
                  <div className="right__info">
                     <p>
                        Price: <span>${product.price}</span>
                     </p>
                     <p>
                        Status:{' '}
                        <span>
                           {product.countInStock > 0
                              ? 'In stock'
                              : 'Out of Stock'}
                        </span>
                     </p>
                     <p>
                        Qty
                        <select
                           value={quantity}
                           onChange={(e) => setQuantity(e.target.value)}
                        >
                           {[...Array(product.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                 {x + 1}
                              </option>
                           ))}
                        </select>
                     </p>
                     <p>
                        <button type="button" onClick={addToCartHandler}>
                           Add to Cart
                        </button>
                     </p>
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default ProductScreen;
