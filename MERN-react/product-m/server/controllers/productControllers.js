const Product = require('../models/productModels')
const createNewProduct = (req, res) => {
    const {title, price, description}= req.body
    Product.create({title, price, description})
      .then(newProduct => res.json({ product: newProduct }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  const getAllProducts = (req, res) => {
    Product.find()
      .then(allProducts => res.json({ products: allProducts }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  const getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then(oneProduct => res.json({ product: oneProduct }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  const editProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(oneProduct => res.json({ product: oneProduct }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

  const deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then(oneProduct => res.json({ product: oneProduct }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

module.exports={createNewProduct, getAllProducts, getOneProduct, editProduct, deleteProduct}