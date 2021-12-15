const express = require('express');
const router = express.Router();

const {
   getAllProducts,
   getProductById,
   postProduct,
} = require('../controller/products');

//@desc GET All products from the database
//@route GET /api/products
//@access Public

router.get('/', getAllProducts);

//@desc GET a product based on id
//@route GET /api/products/:id
//@access Public

router.get('/:id', getProductById);

router.post('/', postProduct);

module.exports = router;
