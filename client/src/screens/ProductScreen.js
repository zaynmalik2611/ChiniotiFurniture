import './ProductScreen.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// Importing Actions

import { getProductDetails } from '../redux/actions/productActions';

const ProductScreen = ({ history }) => {
   const [quantity, setQuantity] = useState(1);
   const dispatch = useDispatch();

   const productDetails = useSelector((state) => state.getProductDetails);
   const { loading, error, product } = productDetails;

   const params = useParams();

   useEffect(() => {
      if (product && params.id !== product._id) {
         dispatch(getProductDetails(params.id));
      }
   }, [dispatch, product, params]);
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
                        Price: <span>{product.price}</span>
                     </p>
                     <p>
                        Status: <span>In Stock</span>
                     </p>
                     <p>
                        Qty
                        <select>
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                        </select>
                     </p>
                     <p>
                        <button type="button">Add to Cart</button>
                     </p>
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default ProductScreen;
