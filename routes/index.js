const express = require("express");
const router = express.Router();

router.get("/add/:addy1/:addy2", (req, res) => {
  const addy1 = Number(req.params.addy1);
  const addy2 = Number(req.params.addy2);
  console.log('It\'s on')
  res.send(`${addy1} + ${addy2} = ${addy1 + addy2}`)
})

router.get("/sub/:sub1/:sub2", (req, res) => {
  const sub1 = Number(req.params.sub1);
  const sub2 = Number(req.params.sub2);
  console.log('It\'s on')
  res.send(`${sub1} - ${sub2} = ${sub1 - sub2}`)
})

router.get("/mult/:mult1/:mult2", (req, res) => {
  const mult1 = Number(req.params.mult1);
  const mult2 = Number(req.params.mult2);
  console.log('It\'s on')
  res.send(`${mult1} * ${mult2} = ${mult1 * mult2}`)
})

router.get("/mult/:mult1/:mult2", (req, res) => {
  const mult1 = Number(req.params.mult1);
  const mult2 = Number(req.params.mult2);
  console.log('It\'s on')
  res.send(`${mult1} * ${mult2} = ${mult1 * mult2}`)
})

router.get("/div/:div1/:div2", (req, res) => {
  const div1 = Number(req.params.div1);
  const div2 = Number(req.params.div2);
  console.log('It\'s on')
  res.send(`${div1} / ${div2} = ${div1 / div2}`)
})


module.exports = router;

// Other Bonus: Style the page. Serve a stylesheet in yout express app!
