const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');


// **All prepended with /subscribers ***
//Getting all
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
})
//Getting One := paramater
router.get('/:id', (req, res) => {
  res.send(req.params.id)

})
//Creating One
router.post('/', async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({
      message: err.message
    })
  }
})
//Updating One Patch just updates certain part unlike POST which would update everything.
router.patch('/:id', (req, res) => {


})

//Deleting One
router.delete('/:id', (req, res) => {


})





module.exports = router;