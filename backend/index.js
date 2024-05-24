const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const port = 8585

app.use(cors())
app.use(express.json())

const allproducts = new mongoose.Schema({
    name: String,
    image: String,
    price: Number
});

const productModel = mongoose.model('products', allproducts);





app.get('/products', async (req, res) => {
    const products =await productModel.find();
    res.send(products)
})


app.get('/products/:id', async (req, res) => {
    const {id} = req.params
    const products =await productModel.findById(id)
    res.send(products)
})

app.post('/products', async(req, res) => {
    const data = req.body
    const products = new productModel(data)
    await products.save()
    res.send(products)
})



app.delete('/products/:id', async(req, res) => {
    const {id} = req.params
    const data = req.body
    const products =await productModel.findByIdAndDelete(id)
    res.send(products)
})





mongoose.connect('mongodb+srv://ilvin88:ilvin88@cluster0.2mgcc5x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected!'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})