const Product = require('../models/Product');
const formidable = require('formidable');
const fs = require('fs');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const upload = require('../middleware/upload');
const MongoClient = require('mongodb').MongoClient;
const GridFSBucket = require('mongodb').GridFSBucket;

const getAllProducts = async (req, res) => {
   try {
      const products = await Product.find({});
      res.json(products);
   } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
   }
};

const getProductById = async (req, res) => {
   try {
      const product = await Product.findById(req.params.id);
      res.json(product);
   } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
   }
};

const uploadFiles = async (req, res) => {
   // let saveData = {};
   // var form = new formidable.IncomingForm();
   // form.parse(req, function (err, fields, files) {
   //    if (err) {
   //       console.log(err);
   //       return res.send('bhai error aa gya hai');
   //    }
   //    console.log('received fields');
   //    console.log(fields);
   //    // product name handling
   //    if (typeof fields.name != 'undefined' && fields.name != '') {
   //       console.log(fields.name);
   //       saveData['name'] = fields.name;
   //    } else {
   //       return res.send('name not defined');
   //    }
   //    // product description handling
   //    if (
   //       typeof fields.description != 'undefined' &&
   //       fields.description != ''
   //    ) {
   //       console.log(fields.description);
   //       saveData['description'] = fields.description;
   //    }
   //    // product price handling
   //    if (typeof fields.price != 'undefined' && fields.price > 0) {
   //       console.log(fields.price);
   //       saveData['price'] = fields.price;
   //    } else {
   //       return res.send('price not set');
   //    }
   //    // product count in stock handling
   //    if (
   //       typeof fields.countInStock != 'undefined' &&
   //       fields.countInStock > 0
   //    ) {
   //       console.log(fields.countInStock);
   //       saveData['countInStock'] = fields.countInStock;
   //    } else {
   //       return res.send('count of the item not set');
   //    }
   //    // product image file handling
   //    if (files.image) {
   //       console.log('received image');
   //       console.log(files.image);
   //       if (files.image.size > 1024000) {
   //          return res.send('file should not be larger than 1MB');
   //       }
   //       // saving image data to the saveData object
   //       saveData.image = {};
   //       saveData.image.data = fs.readFileSync(files.image.filepath);
   //       saveData.image.contentType = files.image.mimetype;
   //       console.log(saveData);
   //    }
   //    return res.send('received data');
   // });
   try {
      await upload(req, res);
      console.log(req.file);
      if (req.file == undefined) {
         return res.send({
            message: 'You must select a file.',
         });
      }
      return res.send({
         message: 'File has been uploaded.',
      });
   } catch (err) {
      console.log(err);
      return res.send({
         message: `Error when trying to upload the image: ${err}`,
      });
   }
};

module.exports = {
   getAllProducts,
   getProductById,
   uploadFiles,
};
