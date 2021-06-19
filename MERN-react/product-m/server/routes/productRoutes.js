const {createNewProduct, getAllProducts, getOneProduct, editProduct, deleteProduct} = require("../controllers/productControllers");


module.exports = app => {

    app.get('/api', getAllProducts);
    app.get('/api/:id', getOneProduct);
    app.put('/api/:id/edit', editProduct);
    app.delete('/api/:id/delete', deleteProduct);
    app.post('/api/new/product', createNewProduct);
};
