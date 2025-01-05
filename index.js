const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/cart-total', (req, res) => {
  let newItemPrice = parseFloat(req.query.price);
  let cartTotal = parseFloat(req.query.total);
  let total = cartTotal + newItemPrice;
  res.send(total.toString());
});

app.get('/membership-discount', (req, res) => {
  let cartTotal = parseFloat(req.query.total);
  let isMember = req.query.member === 'true';
  if (isMember) {
    let discount = cartTotal * 0.1;
    let total = cartTotal - discount;
    res.send(total.toString());
  } else {
    res.send(cartTotal.toString());
  }
});

app.get('/calculate-tax', (req, res) => {
  let cartTotal = parseFloat(req.query.total);
  let tax = parseFloat(cartTotal * 0.05);
  res.send(tax.toString());
});

app.get('/estimate-delivery', (req, res) => {
  let shippingMethod = req.query.method === 'standard';
  let distance = parseFloat(req.query.distance);
  if (shippingMethod) {
    let time = distance * 0.005;
    res.send(time.toString());
  } else {
    let time = distance * 0.01;
    res.send(time.toString());
  }
});

app.get('/shipping-cost', (req, res) => {
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  let cost = weight * distance * 0.1;
  res.send(cost.toString());
});
app.get('/loyalty-points', (req, res) => {
  let perchaseAmount = parseFloat(req.query.purchaseAmount);
  let points = perchaseAmount + perchaseAmount;
  res.send(points.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
